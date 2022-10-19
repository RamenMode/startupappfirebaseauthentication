import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from '../../../firebase';
//import { signOut } from 'react-native-firebaseui-auth';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";



const HomeScreen = () => {

    const navigation = useNavigation();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigation.navigate('Login')
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        });
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style = {styles.signout} onPress = {handleSignOut} >
                <Text style = {styles.text1}>Sign Out, {auth.currentUser.email}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    signout: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',

    },
    text1: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    }
})
export default HomeScreen;