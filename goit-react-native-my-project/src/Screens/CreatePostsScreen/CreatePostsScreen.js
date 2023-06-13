import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreatePostsScreen() {
  const navigation = useNavigation();
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const onPublish = () => {
    navigation.navigate('Posts');
  };

  return (
    <View style={styles.container}>
      <Camera type={type} ref={setCameraRef} style={styles.camera}>
        <View style={styles.photoView}>
          <TouchableOpacity style={styles.takePhotoWrap}>
            <FontAwesome name="camera" size={24} color="#bdbdbd" />
          </TouchableOpacity>
        </View>
      </Camera>

      <Text>Завантажте фото</Text>

      <SafeAreaView>
        <TextInput
          style={styles.nameInput}
          placeholder="Назва..."
          placeholderTextColor="#bdbdbd"
        />
        <View style={styles.locationInputWrap}>
          <TextInput
            style={styles.locationInput}
            placeholder="Місцевість..."
            placeholderTextColor="#bdbdbd"
          />
          <Feather
            name="map-pin"
            size={24}
            color="#bdbdbd"
            style={styles.locationIcon}
          />
        </View>

        <TouchableOpacity style={styles.publishBtn} onPress={onPublish}>
          <Text style={styles.textPublishBtn}>Опублікувати</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  camera: {
    borderRadius: 8,
    height: 200,
    marginBottom: 8,
  },
  photoView: {
    flex: 1,
    width: 288,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  takePhotoWrap: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameInput: {
    marginTop: 10,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbd',
    fontSize: 16,
    lineHeight: 19,
  },
  locationInputWrap: {
    position: 'relative',
    marginTop: 10,
  },
  locationInput: {
    paddingLeft: 28,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbd',
    fontSize: 16,
    lineHeight: 19,
  },
  locationIcon: {
    position: 'absolute',
    top: -3,
  },
  publishBtn: {
    height: 40,
    marginTop: 20,
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 100,
  },
  textPublishBtn: {
    color: '#bdbdbd',
    fontSize: 16,
    lineHeight: 19,
  },
});
