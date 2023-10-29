import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import colors from './src/theme/colors';
import size from './src/theme/size';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.avatar}
        />
        <Text style={styles.text}>VadimNotjustDev</Text>
        <Entypo
          name="dots-three-horizontal"
          style={styles.threedots}
          size={size.s}
        />
      </View>

      {/* Content */}

      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />

      {/* footer */}

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name="hearto"
            size={size.m}
            style={styles.icon}
            color={colors.black}
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
          <Text style={styles.boldText}>89</Text> others
        </Text>
        {/* Description */}
        <Text style={styles.text}>
          <Text style={styles.boldText}> Abdullahi </Text> Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Numquam vitae ad dolores nemo
          perspiciatis, maiores ratione necessitatibus porro distinctio commodi
          quas nihil obcaecati, a tenetur repellendus inventore esse hic amet.
        </Text>

        {/* Comments */}
        <Text> View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={[styles.commentText]}>
            <Text style={styles.boldText}> Abdullahi </Text> Lorem ipsum, dolor
            sit amet consectetur is or an in adipisicing elit. Numquam vitae ad
            dolores nemo
          </Text>
          <AntDesign name="hearto" style={styles.icon} color={colors.black} />
        </View>
        <Text>19 december 2021</Text>
      </View>
    </View>
  );
};

export default App;

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
    marginHorizontal: 10,
    color: colors.black,
    lineHeight: 18,
  },
  threedots: {
    color: colors.grey,
    marginLeft: 'auto',
  },
  iconContainer: {flexDirection: 'row', marginBottom: 5},
  icon: {color: colors.black, marginHorizontal: 5},

  footer: {padding: 10},
  boldText: {fontWeight: fonts.weight.bold},
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    marginHorizontal: 10,
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
});
