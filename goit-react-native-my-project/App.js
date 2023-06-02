import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import BgImage from '../goit-react-native-my-project/src/images/PhotoBG2.jpg';

export default function App() {
  

  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    flex: 1,
    justifyContent: 'center',
  },
});
