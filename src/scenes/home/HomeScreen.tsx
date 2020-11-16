import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { commonStyles } from '_styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={commonStyles.page}>
      <Text>Screen: Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
