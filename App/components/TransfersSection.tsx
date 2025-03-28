import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground, Pressable } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { IconStyles } from './ui/IconStyles';

import React from 'react';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;

const TransfersSection = () => {
    return (
        <ThemedView style={styles.transfersSection}>

            <ThemedView style={styles.tranferContainer}>
                <ThemedView style={styles.tranferIcon}>
                    <FontAwesome6 name="barcode" size={iconSize} style={IconStyles.iconElememnt}  color={useThemeColor({ light: 'black', dark: 'white' }, 'text')} />
                </ThemedView>
                <ThemedText style={styles.transferText} type="defaultSemiBold">Pagar</ThemedText>
            </ThemedView>

            <ThemedView style={styles.tranferContainer}>
                <ThemedView style={styles.tranferIcon}>
                    <MaterialCommunityIcons name="credit-card-search-outline" size={iconSize} style={IconStyles.iconElememnt}  color={useThemeColor({ light: 'black', dark: 'white' }, 'text')} />
                </ThemedView>
                <ThemedText style={styles.transferText} type="defaultSemiBold">Datos</ThemedText>
            </ThemedView>

        </ThemedView>
    );
}

export const styles = StyleSheet.create({

    transfersSection: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 'auto',
      height: Dimensions.get('window').width*0.26,
      margin: 0,
      marginTop: Dimensions.get('window').width*0.03,
      padding: Dimensions.get('window').width*0.05,
      marginBottom: Dimensions.get('window').width*0.05,
    },
  
    tranferContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: Dimensions.get('window').width*0.20,
      height: Dimensions.get('window').width*0.26,
      margin: 0,
      padding: 0,
    },
  
    tranferIcon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').width*0.20,
      height: Dimensions.get('window').width*0.20,
      borderRadius: 1000,
      margin: 0,
      padding: 0,
      backgroundColor: 'rgba(120, 120, 120, 0.3)',
    },
  
    transferText: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'auto',
      height: 'auto',
      margin: 0,
      marginBottom: Dimensions.get('window').width*0.03,
      padding: 0,
    },

});


export default TransfersSection;
