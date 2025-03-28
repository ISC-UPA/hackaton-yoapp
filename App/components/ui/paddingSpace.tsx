import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground } from 'react-native';

import React from 'react';
import { ThemedView } from '../ThemedView';

export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;

const PaddingSpace = () => {
    return (
        <ThemedView style={styles.paddingSpace}></ThemedView>
    );
}

const styles = StyleSheet.create({
    paddingSpace: {
            height: Dimensions.get('window').width*0.03,
            width: 'auto',
            padding: 0,
            margin: 0,
    },
})

export default PaddingSpace;
