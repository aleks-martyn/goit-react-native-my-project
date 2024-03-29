import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PostsScreen from '../PostsScreen/PostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import { useAuthentication } from '../../../utils/hooks/useAuthentication';
import { getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

const auth = getAuth();

const Tab = createBottomTabNavigator();

const styleScreens = {
  headerStyle: {
    height: 70,
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
  const dispatch = useDispatch();

  return (
    <Tab.Navigator initialRouteName="Posts" screenOptions={styleScreens}>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: 'Публікації',
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity onPress={() => dispatch(logOut())}>
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
          tabBarItemStyle: {
            height: 50,
            borderRadius: 50,
            marginTop: 9,
            marginRight: 10,
            marginLeft: 20,
          },
        }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
          unmountOnBlur: true,
          headerTitleAlign: "center",
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
          tabBarItemStyle: {
            height: 50,
            borderRadius: 50,
            marginTop: 9,
            marginHorizontal: 5,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
          tabBarItemStyle: {
            height: 50,
            borderRadius: 50,
            marginTop: 9,
            marginRight: 20,
            marginLeft: 10,
          },
        }}
      />
    </Tab.Navigator>
  );
}
