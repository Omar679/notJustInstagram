import React from 'react';
import {View, StyleSheet} from 'react-native';
// import HomeScreen from './src/screens/homeScreen/Homescreen';
import CommentsScreen from './src/screens/commentsScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <CommentsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
