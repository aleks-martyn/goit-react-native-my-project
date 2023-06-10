import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from '../PostsScreen/PostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';

const Tab = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator initialRouteName="Posts">
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: 'Публікації',
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
        }}
      ></Tab.Screen>
      <Tab.Screen
        screenOptions={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      ></Tab.Screen>
    </Tab.Navigator>
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
});
