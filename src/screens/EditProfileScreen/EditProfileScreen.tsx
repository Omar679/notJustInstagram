import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface ICustomInput {
  label: string;
  multiline?: boolean;
}

const CustomInput = ({label, multiline = false}: ICustomInput) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={label}
        style={styles.input}
        multiline={multiline}
      />
    </View>
  );
};

const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change Profile Photo</Text>
      <CustomInput label="Name" />
      <CustomInput label="Username" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" multiline />
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },
  input: {flex: 1, borderColor: colors.border, borderBottomWidth: 1},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  label: {width: 75},
  textButton: {
    color: colors.primary,
    margin: 10,
    fontSize: fonts.size.md,
  },
});
