import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

import HeaderConfig from '@/components/HeaderConfig';
import TitleComponent from '@/components/ui/TitleComponent';
import { largeButtonStyles } from '@/components/ui/largeButtonStyles';
import { IconStyles } from '@/components/ui/IconStyles';
import PaddingSpace from '@/components/ui/paddingSpace';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import React from 'react';

const profileSize = Dimensions.get('window').width*0.15;
const iconSize = Dimensions.get('window').width*0.08;

const YovoyCardInfo = ({num, bal}:{num: number, bal: number}) => {


    return (
        
        <ImageBackground style={styles.yovoyCard} resizeMode='stretch' borderRadius={Dimensions.get('window').width*0.03} source={require('../img/YOVOY-Card.png')} >
            <View>
                <Text style={styles.balance}>${bal}</Text>
            </View>
            <View>
                <Text style={styles.cardId}>{num}</Text>
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({

    yovoyCard: {
        height: Dimensions.get('window').height*0.27,
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0,
        paddingTop: Dimensions.get('window').width*0.07,
        paddingBottom: Dimensions.get('window').width*0.13,
        margin: 0,
        marginTop: Dimensions.get('window').height*0.03,
        borderRadius: Dimensions.get('window').width*0.03,
    },

    balance: {
        color: 'white',
        margin: 0,
        padding: 0,
        fontSize: Dimensions.get('window').width*0.08,
        fontWeight: '500',
    },

    cardId: {
        color: 'white',
        margin: 0,
        padding: 0,
        fontSize: Dimensions.get('window').width*0.03,
        fontWeight: '500',
    },

})

export default YovoyCardInfo;
