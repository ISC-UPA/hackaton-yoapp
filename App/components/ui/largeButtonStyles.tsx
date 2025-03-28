import React from 'react';
import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground } from 'react-native';


export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;

export const largeButtonStyles = StyleSheet.create({
    
    largeButton: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: 'auto',
            height: Dimensions.get('window').width*0.15,
            margin: 0,
            marginTop: Dimensions.get('window').width*0.015,
            marginBottom: Dimensions.get('window').width*0.015,
            borderRadius: Dimensions.get('window').width*0.03,
            padding: Dimensions.get('window').width*0.03,
            backgroundColor: 'rgba(120, 120, 120, 0.3)',
    },
});