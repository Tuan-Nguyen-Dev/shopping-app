import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeAuth, Login} from '../screens';
import {StatusBar} from 'react-native';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar translucent backgroundColor={'white'} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeAuth" component={HomeAuth} />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
