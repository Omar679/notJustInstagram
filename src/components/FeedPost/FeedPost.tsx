import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import Carousel from '../Carousel/Carousel';
import DoublePressable from '../DoublePressable';
import colors from '../../theme/colors';
import size from '../../theme/size';
import fonts from '../../theme/fonts';
import Comment from '../Comment';
import {IPost} from '../../types/models';
import VideoPlayer from '../VideoPlayer';

interface IFeedPost {
  post: IPost;
  isVisible: boolean;
}

const FeedPost = ({post, isVisible}: IFeedPost) => {
  const [expandDescription, setexpandDescription] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescription = () => {
    setexpandDescription(v => !v);
  };
  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  let content = null;

  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} handlDoublePress={toggleLike} />;
  } else if (post.video) {
    content = (
      <DoublePressable>
        <VideoPlayer paused={!isVisible} src={post.video} />;
      </DoublePressable>
    );
  }

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.avatar}
        />
        <Text style={[styles.text, {marginHorizontal: 5}]}>
          {post.user.username}
        </Text>
        <Entypo
          name="dots-three-horizontal"
          style={styles.threedots}
          size={size.s}
        />
      </View>

      {/* Content */}
      {content}

      {/* footer */}

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            onPress={toggleLike}
            name={isLiked ? 'heart' : 'hearto'}
            size={size.m}
            style={[styles.icon]}
            color={isLiked ? colors.accent : colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={size.m}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={size.m}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={size.m}
            style={[styles.icon, {marginLeft: 'auto'}]}
          />
        </View>
        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.boldText}>Abdullahi </Text> and{' '}
          <Text style={styles.boldText}>{post.nofLike}</Text> others
        </Text>
        {/* Description */}
        <Text style={styles.text} numberOfLines={expandDescription ? 0 : 2}>
          <Text style={styles.boldText}> Abdullahi </Text> {post.description}
        </Text>
        <Text onPress={toggleDescription}>
          {expandDescription ? 'See Less' : 'See More'}
        </Text>

        {/* Comments */}
        <Text> View all {post.nofcomment} comments</Text>
        {post.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  avatar: {width: 50, height: 50, borderRadius: 25},
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  threedots: {
    color: colors.grey,
    marginLeft: 'auto',
  },
  iconContainer: {flexDirection: 'row', marginBottom: 5},
  icon: {marginHorizontal: 5},

  footer: {padding: 10},
  boldText: {fontWeight: fonts.weight.bold},
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
});
