import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
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

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showText, setShowText] = useState('Показати');
  const [password, setPassword] = useState('');

  const onPressShowBtn = () => {
    if (password.trim() !== '' && secureTextEntry) {
      setSecureTextEntry(false);
      setShowText('Приховати');
    } else {
      setSecureTextEntry(true);
      setShowText('Показати');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <ImageBackground
          source={BgImage}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.wrap}>
            <Text style={styles.title}>Увійти</Text>
            <SafeAreaView style={styles.form}>
              <TextInput
                style={[styles.input, customStyleMail]}
                placeholder="Адреса електронної пошти"
                onFocus={() => setFocusMail(true)}
                onBlur={() => setFocusMail(false)}
                inputMode="email"
              />
              <TextInput
                style={[styles.input, customStylePass]}
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                onFocus={() => setFocusPass(true)}
                onBlur={() => {
                  setFocusPass(false);
                  setSecureTextEntry(true);
                  setShowText('Показати');
                }}
                secureTextEntry={secureTextEntry}
              />
              <TouchableOpacity style={styles.showBtn} onPress={onPressShowBtn}>
                <Text style={styles.textShowBtn}>{showText}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textShowBtn}>
                  Немає акаунту? Зареєструватися
                </Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
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
    alignItems: 'center',
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
    fontSize: 16,
    lineHeight: 19,
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
  form: {
    position: 'relative',
  },
  showBtn: {
    position: 'absolute',
    top: 54,
    right: 18,
  },
  textShowBtn: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});
