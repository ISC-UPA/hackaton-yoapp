import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground } from 'react-native';


import React from 'react';

import { IconStyles } from './ui/IconStyles';

import FontAwesome from '@expo/vector-icons/FontAwesome';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';


export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;

const HeaderConfig = () => {
    return (
        <ImageBackground style={styles.bgImage} resizeMode='cover' source={require('../img/home-bg.png')}>
          <View>
            <View style={styles.iconsSection}>

              <FontAwesome name="user-circle-o" size={profileSize} style={styles.profileIcon} color={'white'} />

              <View style={styles.iconsContainer}>
               
              <MaterialIcons name="help-outline" size={iconSize} style={IconStyles.iconElememnt}  color={'white'} />
                <Feather name="more-vertical" size={iconSize} style={IconStyles.iconElememnt}  color={'white'} />
              </View>

            </View>
            <Text style={styles.userName}>
              Hola, Usuario
            </Text>
          </View>
        </ImageBackground>
    );
}

export const styles = StyleSheet.create({
  
    bgImage: {
      height: Dimensions.get('window').height*0.22,
      width: Dimensions.get('window').width,
      padding: 0,
      margin: 0,
    },
    
    userName: {
      color: 'white',
      paddingLeft: Dimensions.get('window').width*0.08,
      paddingTop: Dimensions.get('window').width*0.03,
      fontSize: Dimensions.get('window').width*0.05,
      fontWeight: '500',
    },
  
    iconsSection: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
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
  
    profileIcon: {
      display: 'flex',
      margin: 0,
      marginLeft: Dimensions.get('window').width*0.07,
      padding: 0,
      borderRadius: 1000,
  
    },
  
  });
  

export default HeaderConfig;


