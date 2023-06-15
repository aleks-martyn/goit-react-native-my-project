import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function PostsScreen() {
  const [posts, setPosts] = useState([]);

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
