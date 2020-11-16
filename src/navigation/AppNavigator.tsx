import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { HomeScreen } from '_scenes';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      headerMode={'none'}
      initialRouteName="home"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
