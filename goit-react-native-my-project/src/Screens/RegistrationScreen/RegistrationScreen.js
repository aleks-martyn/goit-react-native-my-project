import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function RegistrationScreen() {
    console.log('screen')
    const image = { uri: 'https://reactjs.org/logo-og.png' }
    console.log(image)
  return (
    <View>
      <ImageBackground
              source={image}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
