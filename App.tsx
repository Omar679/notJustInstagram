import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.primary, fontSize: fonts.size.xxlg}}>
        Hello World
      </Text>
      <AntDesign name="upcircleo" size={30} color={'#000'} />
      <Entypo name="heart" size={30} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
