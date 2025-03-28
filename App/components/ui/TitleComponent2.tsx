import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import React from 'react';

export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;

const TitleComponent2 = ({text}:{text: string}) => {
    return (
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">{text}</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({

    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 'auto',
        height: Dimensions.get('window').width*0.15,
        margin: 0,
        padding: 0,     
    },

})

export default TitleComponent2;