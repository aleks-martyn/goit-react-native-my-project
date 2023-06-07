import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Posts" component={PostsScreen} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Map" component={MapScreen} />
        <MainStack.Screen name="Profile" component={ProfileScreen} />
        <MainStack.Screen name="CreatePosts" component={CreatePostsScreen} />
        <MainStack.Screen name="Comments" component={CommentsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
