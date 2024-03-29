import React, { useCallback } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../../redux/posts/postsSelectors';
import { getAllPosts } from '../../redux/posts/postsOperations';

export default function PostsScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllPosts()).unwrap();
    }, [dispatch])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemWrap}>
            <Image source={{ uri: item.photo }} style={styles.photo} />
            <View style={styles.nameWrap}>
              <Text>{item.name}</Text>
              <Text>{item.displayName}</Text>
            </View>
            <View style={styles.infoWrap}>
              <TouchableOpacity
                style={styles.commentsWrap}
                onPress={() =>
                  navigation.navigate('Comments', { uri: item.photo, id: item.id })
                }
              >
                <Feather name="message-circle" size={24} color={'#bdbdbd'} />
                <Text style={styles.commentsText}>Коментарі</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.locationWrap}
                onPress={() =>
                  navigation.navigate('Map', {
                    latitude: item.location.coords.latitude,
                    longitude: item.location.coords.longitude,
                  })
                }
              >
                <Feather name="map-pin" size={24} color="#bdbdbd" />
                <Text style={styles.nameLocationText}>{item.nameLocation}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  itemWrap: {
    marginTop: 10,
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
  nameWrap: {
    flex: 1,
    marginBottom: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentsText: {
    color: '#212121',
  },
  nameLocationText: {
    color: '#212121',
  },
});
