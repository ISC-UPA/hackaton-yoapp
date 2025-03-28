import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground, Pressable, } from 'react-native';

import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '../../components/ThemedText';
import { Link } from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import HeaderConfig from '@/components/HeaderConfig';
import AccountSection from '@/components/AccountSection';
import TransfersSection from '@/components/TransfersSection';
import DividerComponent from '@/components/ui/DividerComponent';
import OptionButtons from '@/components/OptionButtons';
import TitleComponent from '@/components/ui/TitleComponent';


export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;

export default function HomeScreen() {
  return (

    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      
      headerImage={
        <HeaderConfig />
      }>
      
      {/**--------------------------------------------------------------------------------------------------------------- */}

      <AccountSection />

      {/**--------------------------------------------------------------------------------------------------------------- */}

      <TransfersSection />

      <DividerComponent />

      {/**--------------------------------------------------------------------------------------------------------------- */}

      <OptionButtons />

      <DividerComponent />

      {/**--------------------------------------------------------------------------------------------------------------- */}

      <TitleComponent text='Movimientos'/>

      <ThemedView style={styles.container}>
              
        <Link asChild style={styles.button} href={'/(screen)'}>
          <Pressable >
              <ThemedText type='defaultSemiBold'>
                Home
              </ThemedText>
          </Pressable>
        </Link>
                          
      </ThemedView> 
      
    </ParallaxScrollView>
  );
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width,
    },

    button: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'gray',
        height: 30,
        width: 80,
    }
})