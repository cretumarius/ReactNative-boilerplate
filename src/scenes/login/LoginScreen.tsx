import React from 'react';
import { Text, SafeAreaView, TouchableHighlight } from 'react-native';
import { commonStyles } from '_styles';

const LoginScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={commonStyles.page}>
      <Text>Screen: Login</Text>

      <TouchableHighlight onPress={() => navigation.navigate('home')}>
        <Text>Go to home</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default LoginScreen;
