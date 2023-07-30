import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import BgImage from '../../images/PhotoBG2.jpg';
import UnionIcon from '../../images/Union.png';
import { getAuth } from 'firebase/auth';
import { register } from '../../redux/auth/authOperations';

const auth = getAuth();
const user = auth.currentUser;

export default function RegistrationScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [focusLog, setFocusLog] = useState(false);
  const [focusMail, setFocusMail] = useState(false);
  const [focusPass, setFocusPass] = useState(false);

  const customStyleLog = focusLog ? styles.inputFocus : styles.input;
  const customStyleMail = focusMail ? styles.inputFocus : styles.input;
  const customStylePass = focusPass ? styles.inputFocus : styles.input;

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showText, setShowText] = useState('Показати');

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const addPhoto = () => {
    console.log('Add a photo');
  };

  const onPressShowBtn = () => {
    if (password.trim() !== '' && secureTextEntry) {
      setSecureTextEntry(false);
      setShowText('Приховати');
    } else {
      setSecureTextEntry(true);
      setShowText('Показати');
    }
  };

  const onRegistration = async () => {
    if (login === '' || email === '' || password === '') {
      Alert.alert('All fields are required!');
      return;
    }

    try {
      await dispatch(register({ username: login, email: email, password: password })).unwrap();
      navigation.navigate('Login');
      setLogin('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const onLogin = () => navigation.navigate('Login');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={BgImage}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.wrap}>
            <View style={styles.userPicture}>
              <TouchableOpacity onPress={addPhoto}>
                <View style={styles.wrapUnion}>
                  <Image source={UnionIcon} style={{ width: 13, height: 13 }} />
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <View>
              <View>
                <TextInput
                  style={[styles.input, customStyleLog]}
                  placeholder="Логін"
                  value={login}
                  onChangeText={setLogin}
                  onFocus={() => setFocusLog(true)}
                  onBlur={() => setFocusLog(false)}
                />
                <TextInput
                  style={[styles.input, customStyleMail]}
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onChangeText={setEmail}
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
                <TouchableOpacity
                  style={styles.button}
                  onPress={onRegistration}
                >
                  <Text style={styles.textButton}>Зареєструватися</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.showBtn} onPress={onPressShowBtn}>
                <Text style={styles.textShowBtn}>{showText}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onLogin}>
                <Text style={styles.textLogIn}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    alignSelf: 'center',
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
    borderRadius: 50,
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
    paddingHorizontal: 10,
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
    justifyContent: 'center',
    backgroundColor: '#ff6c00',
    paddingVertical: 6,
    paddingHorizontal: 80,
    borderRadius: 50,
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
    top: 96,
    right: 18,
  },
  textShowBtn: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});
