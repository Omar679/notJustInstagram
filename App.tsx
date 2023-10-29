import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.primary, fontSize: fonts.size.xxlg}}>
        Hello World
      </Text>
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
