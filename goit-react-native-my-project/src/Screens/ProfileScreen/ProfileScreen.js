import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import BgImage from '../../images/PhotoBG2.jpg';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.userWrap}>
          <Text>{user.email}</Text>
          <Text>{user.displayName ?? 'underfined'}</Text>
        </View>
      </ImageBackground>
    </View>
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
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userWrap: {
    width: 150,
    height: 40,
    padding: 5,
    backgroundColor: '#fff',
  },
});
