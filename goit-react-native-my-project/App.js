import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import PostsScreen from './src/Screens/PostsScreen/PostsScreen';
import Home from './src/Screens/Home/Home';
import MapScreen from './src/Screens/MapScreen/MapScreen';
import ProfileScreen from './src/Screens/ProfileScreen/ProfileScreen';
import CreatePostsScreen from './src/Screens/CreatePostsScreen/CreatePostsScreen';
import CommentsScreen from './src/Screens/CommentsScreen/CommentsScreen';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <RegistrationScreen>
          <StatusBar style="auto" />
        </RegistrationScreen>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
