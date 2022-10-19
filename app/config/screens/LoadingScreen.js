import React from 'react';
import {StyleSheet, Dimensions, Text, View, Image, SafeAreaView, TouchableHighlight, Alert, Button, Platform} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function LoadingScreen(props) {
    return (
        <SafeAreaView style = {styles.container}>
            <Image
             style={styles.logo}
                source={require('../assets/BrightLogo-removebg-preview.png')}
            />
            <View style = {styles.spacesmall}/>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFF00',
        flex: '1'
    },
    logo: {
        //flex: '1',
        //alignItems: 'center',
        //justifyContent: 'center',
        flex: '1',
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    space: {
        flex: '2'
    },
    spacesmall: {
        flex: '0.2'
    }
});

export default LoadingScreen;