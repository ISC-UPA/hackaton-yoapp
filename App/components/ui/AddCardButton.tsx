import React from 'react';
import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

import { largeButtonStyles } from '@/components/ui/largeButtonStyles';
import { IconStyles } from '@/components/ui/IconStyles';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;


const AddCardButton = () => {
    return (
        <ThemedView style={largeButtonStyles.largeButton}>
            <MaterialCommunityIcons name="credit-card-plus-outline" size={iconSize} style={IconStyles.iconElememnt}  color={useThemeColor({ light: 'black', dark: 'white' }, 'text')} />
            <ThemedText type="defaultSemiBold">   Agregar Tarjeta</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({

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
        backgroundColor: 'red'
    },

});

export default AddCardButton;
