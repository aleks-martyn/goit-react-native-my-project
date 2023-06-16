import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function PostsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [posts, setPosts] = useState([]);

  console.log(posts);

  useEffect(() => {
    if (route.params && route.params.post) {
      setPosts(prev => [route.params.post, ...prev]);
    }
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemWrap}>
            <Image source={{ uri: item.photo }} style={styles.photo} />
            <Text style={styles.nameText}>{item.name}</Text>
            <View style={styles.infoWrap}>
              <TouchableOpacity
                style={styles.commentsWrap}
                onPress={() => navigation.navigate('Comments')}
              >
                <Feather name="message-circle" size={24} color={'#bdbdbd'} />
                <Text style={styles.commentsText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.locationWrap} onPress={() => navigation.navigate('Map')}>
                <Feather name="map-pin" size={24} color="#bdbdbd" />
                <Text style={styles.nameLocationText}>{item.nameLocation}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  itemWrap: {
    marginBottom: 34,
  },
  photo: {
    width: 288,
    height: 180,
    marginBottom: 8,
    borderRadius: 8,
  },
  infoWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentsWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  locationWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    justifyContent: 'flex-end',
  },
  nameText: {
    marginBottom: 11,
  },
  commentsText: {
    color: '#bdbdbd',
  },
  nameLocationText: {
    color: '#bdbdbd',
  },
});
