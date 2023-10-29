import React from 'react';
import FeedPost from './src/components/FeedPost';
import {View, StyleSheet, ScrollView} from 'react-native';

const post = {
  id: '1',
  createdAt: '19 December 2021',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: {
    id: 'u1',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
    username: 'vadimnotjustdev',
  },
  nofComments: 11,
  nofLikes: 34,
  comments: [
    {
      id: '1',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: 'u1',
        username: 'vadimnotjustdev',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: 'u1',
        username: 'vadimnotjustdev',
      },
    },
  ],
};

const post1 = {
  id: '1',
  createdAt: '19 December 2021',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: {
    id: 'u1',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
    username: 'vadimnotjustdev',
  },
  nofComments: 11,
  nofLikes: 34,
  comments: [
    {
      id: '1',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: 'u1',
        username: 'vadimnotjustdev',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: 'u1',
        username: 'vadimnotjustdev',
      },
    },
  ],
};

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FeedPost post={post} />
        <FeedPost post={post1} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
