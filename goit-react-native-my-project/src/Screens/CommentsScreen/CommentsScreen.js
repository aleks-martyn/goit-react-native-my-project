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
console.log (allComments)
  const onPressCommentBtn = () => {
    if (comment) {
      setAllComments(prev => [...prev, comment]);
      setComment('');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.photo} />
        <SafeAreaView></SafeAreaView>
      </View>
      <View>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  photo: {
    width: 288,
    height: 180,
    marginBottom: 8,
    borderRadius: 8,
  },
  inputWrap: {
    position: 'relative',
    width: '100%',
  },
  input: {
    width: 288,
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
