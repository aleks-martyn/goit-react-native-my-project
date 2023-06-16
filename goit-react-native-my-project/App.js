import 'react-native-gesture-handler';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import Home from './src/Screens/Home/Home';
import MapScreen from './src/Screens/MapScreen/MapScreen';
import CommentsScreen from './src/Screens/CommentsScreen/CommentsScreen';

const MainStack = createStackNavigator();

export default function App() {
  //const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerShown: true,
            title: 'Коментарі',
            headerBackTitleVisible: false,
            headerTintColor: '#212121',
          }}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerShown: true,
            title: 'Мапа',
            headerBackTitleVisible: false,
            headerTintColor: '#212121',
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
