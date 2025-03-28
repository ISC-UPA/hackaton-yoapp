import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import ThemeColor from '@/components/ThemeColor';
import { useThemeColor } from '@/hooks/useThemeColor';
import { IconStyles } from './ui/IconStyles';

import React from 'react';

export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;

const AccountSection = () => {
    return (
        <ThemedView>
            <ThemedView style={styles.accountSection}>
                <ThemedText type="subtitle">Tarjeta YOVOY Actual</ThemedText>
                <IconSymbol size={iconSize} style={IconStyles.iconElememnt} name="chevron.right" color={useThemeColor({ light: 'black', dark: 'white' }, 'text')} />
            </ThemedView>
            
            <ThemedView style={styles.balanceSection}>
                <ThemedText type="title">$00.00</ThemedText>
            </ThemedView>
        </ThemedView>
    );
}

export const styles = StyleSheet.create({
  
    accountSection: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      width: 'auto',
      height: Dimensions.get('window').width*0.15,
      margin: 0,
      padding: 0,
    },
  
    balanceSection: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      width: 'auto',
      height: Dimensions.get('window').width*0.1,
      margin: 0,
      padding: 0,
    },

});

export default AccountSection;
