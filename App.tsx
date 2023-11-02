import React from 'react';
import {View, StyleSheet} from 'react-native';
// import HomeScreen from './src/screens/homeScreen/Homescreen';
// import CommentsScreen from './src/screens/commentsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <ProfileScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
