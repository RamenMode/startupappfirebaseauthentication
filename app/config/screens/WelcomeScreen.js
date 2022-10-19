//rsf
import React from 'react';
import {StyleSheet, Dimensions, Text, View, Image, SafeAreaView, TouchableHighlight, Alert, Button, Platform} from 'react-native';

function WelcomeScreen(props) {
    return (
        <SafeAreaView 
            style = {styles.background} 
            >
                <View style={styles.logoContainer}>
                    <Image style = {styles.logo} source = {require('../assets/BrightLogo-removebg-preview.png')}/>
                    <Text style = {styles.text}> An Academic Community Built for You </Text>
                </View>
                <TouchableHighlight style={styles.loginButton} onPress={() => console.log('Image Tapped')}>
                    <Text style={styles.regText}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.registerButton} onPress={() => console.log('Image Tapped')}>
                    <Text style={styles.regText}>Register</Text>
                </TouchableHighlight>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#A020F0"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
        alignItems: "center",
        justifyContent: "center",
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 250,
        height: 250,
        position: 'absolute',
        top: 10, 
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    text: {
        position: "relative",
        top: 250,
        fontSize: 20,
        fontWeight: 'bold',
    },
    regText: {
        fontSize: 20,
        fontWeight: 'bold',
    }

});

export default WelcomeScreen;