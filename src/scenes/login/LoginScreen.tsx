import React, { useContext } from 'react';
import { Text, SafeAreaView, TouchableHighlight } from 'react-native';
import { AuthContext } from '_contexts';
import { Common } from '_styles';

const LoginScreen = ({ _navigation }: any) => {
  const { signIn } = useContext(AuthContext);
  return (
    <SafeAreaView style={Common.page}>
      <Text>Screen: Login</Text>

      <TouchableHighlight onPress={() => signIn('user', 'pass')}>
        <Text>Go to home</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default LoginScreen;
