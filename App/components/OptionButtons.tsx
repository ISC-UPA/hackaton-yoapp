import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground, Pressable } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { IconStyles } from './ui/IconStyles';
import { largeButtonStyles } from './ui/largeButtonStyles';

import React from 'react';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router';

export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;


const OptionButtons = () => {
    return (
        <ThemedView>
            <Link asChild href={'/(tabs)/cards'}>
                <Pressable style={largeButtonStyles.largeButton}>
                    <MaterialCommunityIcons name="credit-card-multiple-outline" size={iconSize} style={IconStyles.iconElememnt}  color={useThemeColor({ light: 'black', dark: 'white' }, 'text')} />
                    <ThemedText type="defaultSemiBold">   Mis Tarjetas</ThemedText>
                </Pressable>
            </Link>

            <Link asChild href={'/(tabs)/bus-routes'}>
                <Pressable style={largeButtonStyles.largeButton}>
                    <MaterialCommunityIcons name="routes" size={iconSize} style={IconStyles.iconElememnt}  color={useThemeColor({ light: 'black', dark: 'white' }, 'text')} />
                    <ThemedText type="defaultSemiBold">   Rutas</ThemedText>
                </Pressable>
            </Link>

            <Link asChild href={'/(tabs)/bus-location'}>
                <Pressable style={largeButtonStyles.largeButton}>
                    <MaterialCommunityIcons name="bus-marker" size={iconSize} style={IconStyles.iconElememnt}  color={useThemeColor({ light: 'black', dark: 'white' }, 'text')} />
                    <ThemedText type="defaultSemiBold">   Localizar</ThemedText>
                </Pressable>
            </Link>

        </ThemedView>
    );
}


export default OptionButtons;
