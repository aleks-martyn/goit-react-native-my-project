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
                    style={{ width: 13, height: 13, }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        options={{ headerShown: false }}
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
  tabBarPostsStyle: { paddingTop: 17, flex: 1, },
  createPostBtn: {
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6c00',
    borderRadius: 100,
  },
  tabBarCreateStyle: {paddingTop: 9, flex: 1,}
});
