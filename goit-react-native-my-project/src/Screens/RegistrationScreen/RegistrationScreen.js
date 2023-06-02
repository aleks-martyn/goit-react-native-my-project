import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import BgImage from '../../images/PhotoBG2.jpg';

export default function RegistrationScreen() {
  return (
    <View>
      <ImageBackground
        source={BgImage}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.wrap}></View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    flex: 1,
    justifyContent: 'center',
  },
  wrap: {
    marginTop: 218,
    width: '100%',
    height: 350,
    backgroundColor: '#fff',
  }
});
