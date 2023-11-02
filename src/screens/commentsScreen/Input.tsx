import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const Input = () => {
  const [NewComment, setNewComment] = useState('');

  const onPost = () => {
    console.warn(NewComment);
    setNewComment('');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        placeholder="Comment"
        style={styles.textInput}
        value={NewComment}
        onChangeText={setNewComment}
        multiline
      />
      <Text onPress={onPost} style={styles.button}>
        Post
      </Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 40,
  },
  container: {
    flexDirection: 'row',
    borderTopColor: colors.border,
    borderTopWidth: 1,
    margin: 5,
    alignItems: 'flex-end',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    paddingRight: 50,
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    color: colors.primary,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
  },
});
