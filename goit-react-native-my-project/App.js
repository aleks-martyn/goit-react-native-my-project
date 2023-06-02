import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen>
        <StatusBar style="auto" />
      </RegistrationScreen>
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
