import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useForm, Controller, Control} from 'react-hook-form';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {IUser} from '../../types/models';

const URL_Regex =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i;

type IEditableUserField = 'name' | 'username' | 'bio' | 'website';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  label: string;
  multiline?: boolean;
  control: Control<IEditableUser, object>;
  name: IEditableUserField;
  rules?: object;
}

const CustomInput = ({
  label,
  name,
  multiline = false,
  control,
  rules = {},
}: ICustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => {
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={{flex: 1}}>
              <TextInput
                placeholder={label}
                style={[
                  styles.input,
                  {borderColor: error ? colors.accent : colors.border},
                ]}
                multiline={multiline}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
              {error && (
                <Text style={{color: colors.accent}}>{error.message}</Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

const EditProfileScreen = () => {
  const {handleSubmit, control} = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      bio: user.bio,
      website: user.website,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.warn('Submitting', data);
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change Profile Photo</Text>
      <CustomInput
        rules={{required: 'Name is Required'}}
        control={control}
        name="name"
        label="Name"
      />
      <CustomInput
        rules={{
          required: 'Username is Required',
          minLength: {
            value: 3,
            message: 'Username should be more than 3 charachters',
          },
        }}
        control={control}
        name="username"
        label="Username"
      />
      <CustomInput
        rules={{
          required: 'Website is required',
          pattern: {value: URL_Regex, message: 'Invalid Url'},
        }}
        control={control}
        name="website"
        label="Website"
      />
      <CustomInput
        rules={{
          required: 'Bio is Required',
          maxLength: {
            value: 200,
            message: 'Bio should not be more than 200 charachters',
          },
        }}
        control={control}
        name="bio"
        label="Bio"
        multiline
      />
      <Text style={styles.textButton} onPress={handleSubmit(onSubmit)}>
        Submit
      </Text>
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
  input: {borderBottomWidth: 1},
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
