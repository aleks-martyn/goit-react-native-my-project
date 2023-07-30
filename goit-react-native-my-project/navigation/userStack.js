import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/Screens/Home/Home';
import MapScreen from '../src/Screens/MapScreen/MapScreen';
import CommentsScreen from '../src/Screens/CommentsScreen/CommentsScreen';

const MainStack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerShown: true,
            title: 'Коментарі',
            headerTitleAlign: "center",
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
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            headerTintColor: '#212121',
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
