import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, Image, SafeAreaView, TouchableHighlight, Alert, Button, Platform} from 'react-native';
import { useDimensions } from "@react-native-community/hooks"
import LoadingScreen from './app/config/screens/LoadingScreen';
import WelcomeScreen from './app/config/screens/WelcomeScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/config/screens/HomeScreen';
import LoginScreen from './app/config/screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  //const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
