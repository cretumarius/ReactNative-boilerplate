import React from 'react';
import { HelloWorld } from '_atoms';
import { StyleSheet, View } from 'react-native';
import { flex_design } from '_styles';

const App = () => {
  return (
    <View style={styles.page}>
      <HelloWorld name="React Native" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    ...flex_design('column', 'center', 'center'),
  },
});
