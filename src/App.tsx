import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator, AuthNavigator } from '_navigation';

const isLoggedIn = false;
const App = () => <NavigationContainer>{!isLoggedIn ? <AuthNavigator /> : <AppNavigator />}</NavigationContainer>;

export default App;
