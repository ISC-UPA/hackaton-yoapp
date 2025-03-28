import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground } from 'react-native';


import React from 'react';

import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { IconStyles } from './ui/IconStyles';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';


export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;

const HeaderConfigV2 = () => {
    return (
        <ThemedView style={styles.bgImage}>
                <View style={styles.iconsSection}>

                    <View style={styles.iconsContainer}>
                        <MaterialIcons name="help-outline" size={iconSize} style={IconStyles.iconElememnt}  color={useThemeColor({ light: 'black', dark: 'white' }, 'text')} />
                        <Feather name="more-vertical" size={iconSize} style={IconStyles.iconElememnt}  color={useThemeColor({ light: 'black', dark: 'white' }, 'text')} />
                    </View>

                </View>
        </ThemedView>
    );
}

export const styles = StyleSheet.create({
  
    bgImage: {
    display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: Dimensions.get('window').height*0.12,
      width: Dimensions.get('window').width,
      padding: 0,
      margin: 0,
    },
    
    iconsSection: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width*0.20,
      margin: 0,
      marginTop: Dimensions.get('window').width*0.08,
      padding: 0,
    },
  
    iconsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: Dimensions.get('window').width*0.06,
      margin: 0,
      width: Dimensions.get('window').width*0.32,
      height: Dimensions.get('window').width*0.20,
  
    },
  
  });
  

export default HeaderConfigV2;


