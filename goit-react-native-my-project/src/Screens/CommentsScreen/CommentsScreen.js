import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRoute, useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../redux/comments/commentsOperations';
import { getAllComments } from '../../redux/comments/commentsOperations';
import { selectComments } from '../../redux/comments/commentsSelectors';

export default function CommentsScreen() {
  const route = useRoute();
  const dispatch = useDispatch();
  const allComments = useSelector(selectComments);

  const [comment, setComment] = useState('');
  const { uri, id } = route.params;

  const onPressCommentBtn = async () => {
    if (comment)
      try {
        const { displayName, uid } = getAuth().currentUser;
        const creationTime = Date.now();
        const postId = id;
        const newComment = { comment, displayName, uid, postId, creationTime };
        await dispatch(addComment(newComment)).unwrap();

        setComment('');
      } catch (error) {
        console.log(error.message);
      }
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllComments()).unwrap();
    }, [dispatch])
  );

  const filteredCommentsByPost = allComments.filter(item => item.postId === id);

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri }} style={styles.photo} />
        <SafeAreaView style={styles.listWrap}>
          <FlatList
            data={filteredCommentsByPost}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <>
                <Text style={styles.userName}>{item.displayName}</Text>
                <View style={styles.commentWrap}>
                  <Text style={styles.commentText}>{item.comment}</Text>
                </View>
              </>
            )}
          />
        </SafeAreaView>
      </View>
      <View style={styles.inputWrap}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          <TextInput
            placeholder="Коментувати..."
            style={styles.input}
            value={comment}
            onChangeText={setComment}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.inputBtn} onPress={onPressCommentBtn}>
          <AntDesign name="arrowup" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    paddingTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  photo: {
    width: 288,
    height: 180,
    marginBottom: 8,
    borderRadius: 8,
  },
  listWrap: {
    marginTop: 15,
    height: 220,
  },
  commentWrap: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 4,
  },
  userName: { marginBottom: 5 },
  commentText: {
    fontSize: 16,
    lineHeight: 19,
  },
  inputWrap: {
    position: 'relative',
    width: '100%',
    marginTop: 15,
  },
  input: {
    width: '100%',
    height: 40,
    paddingVertical: 16,
    paddingLeft: 16,
    borderColor: '#e8e8e8',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
    fontSize: 16,
    lineHeight: 19,
  },
  inputBtn: {
    position: 'absolute',
    top: 8,
    right: 5,
    width: 24,
    height: 24,
    backgroundColor: '#ff6c00',
    borderRadius: 50,
  },
});
