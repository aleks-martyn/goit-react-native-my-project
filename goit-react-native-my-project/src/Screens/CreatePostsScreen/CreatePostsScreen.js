import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
//import { nanoid } from 'goit-react-native-my-project/node_modules/nanoid';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default function CreatePostsScreen() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [name, setName] = useState('');
  const [nameLocation, setNameLocation] = useState('');
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);

  const pablishBtnIsActive = photo
    ? styles.publishBtnIsActive
    : styles.publishBtn;
  const textPublishBtnIsActive = photo
    ? styles.textPublishBtnIsActive
    : styles.textPublishBtn;

  useEffect(() => {
    async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');

      let locationPermission =
        await Location.requestForegroundPermissionsAsync();
      if (locationPermission.status !== 'granted') {
        console.log('Permission to access location was denied');
      }
    };
  }, []);

  if (hasPermission === false || null) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
    }
  };

  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const onPublish = async () => {
    if (!photo) return;

    let location = await Location.getCurrentPositionAsync({});

    const post = { photo, location, name, nameLocation };
    navigation.navigate('Posts', { post });
    setName('');
    setNameLocation('');
    setPhoto(null);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Camera type={type} ref={setCameraRef} style={styles.camera}>
          <View style={styles.photoView}>
            <TouchableOpacity style={styles.flipContainer} onPress={flipCamera}>
              <MaterialIcons
                name="flip-camera-android"
                size={24}
                color="#fff"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.takePhotoWrap} onPress={takePhoto}>
              <FontAwesome name="camera" size={24} color="#bdbdbd" />
            </TouchableOpacity>
          </View>
        </Camera>

        <Text style={styles.photoLoad}>Завантажте фото</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.nameInput}
            placeholder="Назва..."
            placeholderTextColor="#bdbdbd"
          />

          <View style={styles.locationInputWrap}>
            <TextInput
              value={nameLocation}
              onChangeText={setNameLocation}
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
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={[styles.publishBtn, pablishBtnIsActive]}
          onPress={onPublish}
        >
          <Text style={[styles.textPublishBtn, textPublishBtnIsActive]}>
            Опублікувати
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
    marginBottom: 5,
  },
  photoView: {
    position: 'relative',
    flex: 1,
    width: 288,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  takePhotoWrap: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoLoad: {
    color: '#bdbdbd',
    fontSize: 16,
    lineHeight: 19,
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
  publishBtnIsActive: {
    backgroundColor: '#ff6c00',
  },
  textPublishBtn: {
    color: '#bdbdbd',
    fontSize: 16,
    lineHeight: 19,
  },
  textPublishBtnIsActive: {
    color: '#fff',
  },
  flipContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flex: 1,
  },
});
