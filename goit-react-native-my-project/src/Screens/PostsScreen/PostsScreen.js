import { View, StyleSheet, Text } from 'react-native';

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    height: 88,
    paddingBottom: 11,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.3,
    shadowColor: '#000',
    shadowRadius: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footer: {
    width: '100%',
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
  title: {
    fontSize: 17,
    lineHeight: 22,
    color: '#212121',
  },
});
