import React from 'react';
import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground } from 'react-native';


export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;

export const ButtonStyles = StyleSheet.create({

    buttonContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'auto',
            height: Dimensions.get('window').width*0.13,
            margin: 0,
            marginTop: Dimensions.get('window').width*0.015,
            marginBottom: Dimensions.get('window').width*0.015,
            padding: Dimensions.get('window').width*0.03,
    },
    Button: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get('window').width*0.4,
            height: Dimensions.get('window').width*0.13,
            margin: 0,
            borderRadius: Dimensions.get('window').width*0.03,
            padding: Dimensions.get('window').width*0.03,
            backgroundColor: 'rgba(120, 120, 120, 0.3)',
    },
});