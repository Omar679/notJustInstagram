import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
}

const Comment = ({comment}: ICommentProps) => {
  return (
    <View style={styles.comment}>
      <Text style={[styles.commentText]}>
        <Text style={styles.boldText}> {comment.user.username} </Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign name="hearto" style={styles.icon} color={colors.black} />
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
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
  icon: {color: colors.black, marginHorizontal: 5},
});
