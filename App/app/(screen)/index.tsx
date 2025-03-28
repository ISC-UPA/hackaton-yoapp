import React from 'react';

import { StyleSheet, View, Pressable, Dimensions, TextInput } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

import ParallaxScrollValidate from '@/components/ParallaxScrollValidate';
import ValidateScreen from '@/components/ValidateScreen';
import TitleComponent from '@/components/ui/TitleComponent';
import MapComponent from '@/components/mapComponent';

import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import Register from '../../components/Register';

export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;


const Index = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    const [number, onChangeNumber] = React.useState('');
        
    return (

        <ParallaxScrollValidate
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            
            headerImage={
                <ValidateScreen />
            }>

            {/**--------------------------------------------------------------------------------------------------------------- */}

            <Register />

            {/**--------------------------------------------------------------------------------------------------------------- */}

            <ThemedView style={styles.container}>
        
                <Link asChild style={styles.button} href={'/(tabs)/home'}>
                    <Pressable >
                        <ThemedText type='defaultSemiBold'>
                                Home
                        </ThemedText>
                    </Pressable>
                </Link>
                    
            </ThemedView> 
            
        </ParallaxScrollValidate>
        
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
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})


export default Index;
