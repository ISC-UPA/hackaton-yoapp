import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground } from 'react-native';

import React from 'react';

import { IconStyles } from './ui/IconStyles';

import FontAwesome from '@expo/vector-icons/FontAwesome';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';


export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;

const ValidateScreen = () => {
    return (
        <ImageBackground style={styles.welcome} resizeMode='cover' source={require('../img/header-login.png')}>
          
        </ImageBackground>
    );
}

export const styles = StyleSheet.create({

    welcome: {
        height: Dimensions.get('window').height*0.5,
        width: Dimensions.get('window').width,
        padding: 0,
        margin: 0,
    },

});

export default ValidateScreen;


