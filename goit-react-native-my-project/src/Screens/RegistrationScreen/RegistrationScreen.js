import {
  ImageBackground,
  Image,
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
import UnionIcon from '../../images/Union.png';

export default function RegistrationScreen() {
  const [focusLog, setFocusLog] = useState(false);
  const [focusMail, setFocusMail] = useState(false);
  const [focusPass, setFocusPass] = useState(false);
  const customStyleLog = focusLog ? styles.inputFocus : styles.input;
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
            <View style={styles.userPicture}>
              <TouchableOpacity>
                <View style={styles.wrapUnion}>
                  <Image source={UnionIcon} style={{ width: 13, height: 13 }} />
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <SafeAreaView>
              <TextInput
                style={[styles.input, customStyleLog]}
                placeholder="Логін"
                onFocus={() => setFocusLog(true)}
                onBlur={() => setFocusLog(false)}
              />
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
                <Text style={styles.textButton}>Зареєструватися</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textLogIn}>Вже є акаунт? Увійти</Text>
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
  wrapUnion: {
    position: 'absolute',
    top: 81,
    right: -12,
    width: 25,
    height: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ff6c00',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: '50%',
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
  textLogIn: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
    textAlign: 'center',
  },
  showBtn: {
    position: 'absolute',
    top: 98,
    right: 18,
  },
  textShowBtn: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});
