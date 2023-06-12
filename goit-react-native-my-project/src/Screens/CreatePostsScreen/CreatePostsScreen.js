import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CreatePostsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>CreatePosts</Text>
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
  },
});