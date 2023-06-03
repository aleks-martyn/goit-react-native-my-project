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
import { useState } from 'react';
import BgImage from '../../images/PhotoBG2.jpg';

export default function LoginScreen() {
  const [focusMail, setFocusMail] = useState(false);
  const [focusPass, setFocusPass] = useState(false);
  const customStyleMail = focusMail ? styles.inputFocus : styles.input;
  const customStylePass = focusPass ? styles.inputFocus : styles.input;

  return (
    <View>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.wrap}>
          <Text style={styles.title}>Увійти</Text>
          <SafeAreaView>
            <TextInput
              style={[styles.input, customStyleMail]}
              placeholder="Адреса електронної пошти"
              onFocus={() => setFocusMail(true)}
              onBlur={() => setFocusMail(false)}
              inputMode="email"
            ></TextInput>
            <TextInput
              style={[styles.input, customStylePass]}
              placeholder="Пароль"
              onFocus={() => setFocusPass(true)}
              onBlur={() => setFocusPass(false)}
            ></TextInput>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Увійти</Text>
            </TouchableOpacity>
            <Button title="Немає акаунту? Зареєструватися" />
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
    width: '100%',
    height: 420,
    paddingTop: 15,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginBottom: 15,
    fontSize: 30,
    letterSpacing: 0.01,
    lineHeight: 35.16,
    textAlign: 'center',
    color: '#212121',
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
    marginTop: 25,
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
