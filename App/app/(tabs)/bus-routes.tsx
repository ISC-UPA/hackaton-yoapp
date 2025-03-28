import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground } from 'react-native';

import React from 'react';

import ParallaxScrollViewV2 from '@/components/ParallaxScrollViewV2';
import HeaderConfigV2 from '@/components/HeaderConfigV2';
import TitleComponent2 from '@/components/ui/TitleComponent2';
import MapComponent from '@/components/mapComponent';

export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;

const BusRoutes = () => {
    return (
        <ParallaxScrollViewV2
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            
            headerImage={
                <HeaderConfigV2 />
            }>

            {/**--------------------------------------------------------------------------------------------------------------- */}

            <TitleComponent2 text='Rutas de Camiones'/>

            <MapComponent />  

            {/**--------------------------------------------------------------------------------------------------------------- */} 

        </ParallaxScrollViewV2>
    );
}

export default BusRoutes;
