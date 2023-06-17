import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function CommentsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);
  const { uri } = route.params;

  useEffect(() => {
    if (route.params && route.params.uri) console.log(route.params);
  }, []);

  const onPressCommentBtn = () => {
    if (comment) {
      setAllComments(prev => [...prev, comment]);
      setComment('');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri }} style={styles.photo} />
        <SafeAreaView style={styles.listWrap}>
          <FlatList
            data={allComments}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <>
                <Text>User</Text>
                <View style={styles.commentWrap}>
                  <Text style={styles.commentText}>{item}</Text>
                </View>
              </>
            )}
          />
        </SafeAreaView>
      </View>
      <View style={styles.inputWrap}>
        <TextInput
          placeholder="Коментувати..."
          style={styles.input}
          value={comment}
          onChangeText={setComment}
        />
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
  },
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
