import React from 'react';
import FeedPost from '../../components/FeedPost';
import {View, StyleSheet, FlatList} from 'react-native';
import posts from '../../../src/assets/data/posts.json';
// import {IPost} from '../../types/models';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <FeedPost post={item} showsVerticalScrollIndicator={false} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default HomeScreen;
