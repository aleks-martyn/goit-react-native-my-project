import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BgImage from '../../images/PhotoBG2.jpg';

export default function RegistrationScreen() {
  return (
    <View>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.wrap}>
          <View style={styles.userPicture}></View>
          <Text style={styles.title}>Реєстрація</Text>
          <SafeAreaView>
            <TextInput style={styles.input}></TextInput>
            <TextInput style={styles.input}></TextInput>
            <TextInput style={[styles.input, { marginBottom: 0 }]}></TextInput>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Зареєструватися</Text>
            </TouchableOpacity>
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
    height: 449,
    paddingTop: 92,
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
    marginBottom: 33,
    fontSize: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    marginBottom: 16,
    backgroundColor: '#f6f6f6',
    borderColor: '#e8e8e8',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ff6c00',
    padding: 10,
  },
  textButton: {
    color: '#fff',
  }
});
