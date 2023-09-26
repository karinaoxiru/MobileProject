import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CreateAccount from '../src/CreateAccount';
import Login from '../src/Login';
import Mail from '../src/Mail';
import Password from '../src/Password';
import Check from '../src/Check';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>  
      <Stack.Screen name="CreateAccount" component={CreateAccount}  options={{ headerShown: false }}/>
      <Stack.Screen name="Mail" component={Mail}  options={{ headerShown: false }}/>
      <Stack.Screen name="Password" component={Password} options={{ headerShown: false }}/>
      <Stack.Screen name="Check" component={Check} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}