import { StyleSheet, Image, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from '../PostsScreen/PostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import PostsIcon from '../../images/grid.png';
import CreateIcon from '../../images/union-white.png';
import UserIcon from '../../images/user.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
          tabBarButton: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Posts')}>
              <View style={styles.tabBarPostsStyle}>
                <Image source={PostsIcon} style={{ width: 24, height: 24 }} />
              </View>
            </TouchableOpacity>
          ),
          tabBarItemStyle: { width: 100 },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
          tabBarButton: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('CreatePosts')}
            >
              <View style={styles.tabBarCreateStyle}>
                <View style={styles.createPostBtn}>
                  <Image
                    source={CreateIcon}
                    style={{ width: 13, height: 13 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarButton: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <View style={styles.tabBarUserStyle}>
                <Image source={UserIcon} style={{ width: 24, height: 24 }} />
              </View>
            </TouchableOpacity>
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
});
