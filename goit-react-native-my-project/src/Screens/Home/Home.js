import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
  return <View style={styles.container}><Text>Home</Text></View>;
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
