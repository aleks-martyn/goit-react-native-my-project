import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from './src/Screens/PostsScreen/PostsScreen';
import ProfileScreen from './src/Screens/ProfileScreen/ProfileScreen';
import CreatePostsScreen from './src/Screens/CreatePostsScreen/CreatePostsScreen';

const Tab = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={PostsScreen}></Tab.Screen>
      <Tab.Screen name="CreatePosts" component={CreatePostsScreen}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
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
