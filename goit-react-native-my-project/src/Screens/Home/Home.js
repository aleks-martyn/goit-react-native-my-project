import { StyleSheet, Image, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PostsScreen from '../PostsScreen/PostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import UserIcon from '../../images/user.png';

const Tab = createBottomTabNavigator();

const styleScreens = {
  headerStyle: {
    height: 88,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.3,
    shadowColor: '#000',
    shadowRadius: 0,
  },
  tabBarStyle: {
    height: 83,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: -0.5,
    },
    shadowOpacity: 0.3,
    shadowColor: '#000',
    shadowRadius: 0,
  },
  tabBarShowLabel: false,
  tabBarActiveBackgroundColor: '#FF6C00',
  tabBarInactiveTintColor: '#212121',
  tabBarActiveTintColor: '#fff',
};

export default function Home() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator initialRouteName="Posts" screenOptions={styleScreens}>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: 'Публікації',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Feather.Button
                name="log-out"
                size={24}
                color="#bdbdbd"
                backgroundColor="#fff"
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Posts')}>
              <Feather.Button
                name="arrow-left"
                size={24}
                color="#212121"
                backgroundColor="#fff"
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="add" size={24} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarButton: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarPostsStyle: {
    paddingTop: 17,
    minWidth: 106,
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  createPostBtn: {
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6c00',
    borderRadius: 100,
  },
  tabBarCreateStyle: { paddingTop: 9, minWidth: 106, alignItems: 'center' },
  tabBarUserStyle: {
    paddingTop: 17,
    minWidth: 106,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  logOutStyle: {
    width: 60,
    height: 70,
    paddingRight: 16,
    paddingLeft: 20,
    paddingTop: 24,
  },
  BackArrowStyle: {
    width: 60,
    height: 70,
    paddingRight: 20,
    paddingLeft: 16,
    paddingTop: 24,
  },
});
