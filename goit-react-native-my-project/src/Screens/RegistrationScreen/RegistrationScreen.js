import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BgImage from '../../images/PhotoBG2.jpg';
import { useState } from 'react';

export default function RegistrationScreen() {
  const [focus, setFocus] = useState(false);
  const customStyle = focus ? styles.inputFocus : styles.input;

  return (
    <View>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.wrap}>
          <View style={styles.userPicture}></View>
          <Text style={styles.title}>Реєстрація</Text>
          <SafeAreaView>
            <TextInput
              style={[styles.input, customStyle]}
              placeholder="Логін"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            ></TextInput>
            <TextInput
              style={[styles.input, customStyle]}
              placeholder="Адреса електронної пошти"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              inputMode="email"
            ></TextInput>
            <TextInput
              style={[styles.input, { marginBottom: 30 }]}
              placeholder="Пароль"
            ></TextInput>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Зареєструватися</Text>
            </TouchableOpacity>
            <Button title="Вже є акаунт? Увійти" />
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  wrap: {
    position: 'relative',
    width: '100%',
    height: 500,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userPicture: {
    position: 'absolute',
    top: -60,
    left: 100,
    width: 120,
    height: 120,
    backgroundColor: '#f6f6f6',
    borderRadius: 16,
  },
  title: {
    marginBottom: 15,
    fontSize: 30,
    letterSpacing: 0.01,
    lineHeight: 35.16,
    textAlign: 'center',
  },
  input: {
    height: 35,
    paddingHorizontal: 16,
    marginBottom: 10,
    backgroundColor: '#f6f6f6',
    borderColor: '#e8e8e8',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
  },
  inputFocus: {
    borderColor: '#ff6c00',
  },
  button: {
    height: 40,
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#ff6c00',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 100,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 19,
  },
});
