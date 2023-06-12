import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CreatePostsScreen() {
  const navigation = useNavigation();
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  return (
    <View style={styles.container}>
      <Camera type={type} ref={setCameraRef}>
        <View></View>
      </Camera>
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
