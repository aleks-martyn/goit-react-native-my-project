import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen>
        <StatusBar style="auto" />
      </LoginScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
