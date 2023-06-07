import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MapScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Map</Text>
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
});