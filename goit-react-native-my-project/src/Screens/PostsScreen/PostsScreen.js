import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function PostsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [posts, setPosts] = useState([]);

  console.log(posts);

  useEffect(() => {
    if (route.params && route.params.post) {
      setPosts(prev => [route.params.post, ...prev]);
    }
  }, [route.params]);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },
});
