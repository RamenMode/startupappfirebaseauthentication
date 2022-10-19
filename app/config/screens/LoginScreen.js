import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from '../../../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
//firebase 9.12.2




const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              navigation.navigate('Home')
              
            }
          });

          return unsubscribe
    })

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        });
    }
    
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => { 
        const user = userCredential.user;
        console.log(user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return (
        <KeyboardAvoidingView style ={styles.container}
        behavior="padding"
        >
            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder = "Email"
                    value = {email}
                    onChangeText = {text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder = "Password"
                    value = {password}
                    onChangeText = {text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity 
                onPress={handleLogin}
                style = {styles.button}
                >
                    <Text style = {styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={handleSignUp}
                style = {[styles.button, styles.buttonOutline]}
                >
                    <Text style = {styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'


    },
    buttonOutline: {
        backgroundColor: 'white',
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})