import {Image, Text, View} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import styles from './styles';
import Button from '../../components/Button';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image source={{uri: user.image}} style={styles.avarter} />
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Following</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>345</Text>
          <Text>Following</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>3997</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>
      <View style={{flexDirection: 'row'}}>
        <Button text="Edit Profile" onPress={() => console.warn('Warn')} />
        <Button text="Another Button" onPress={() => console.warn('Warn')} />
      </View>
    </View>
  );
};

export default ProfileHeader;
