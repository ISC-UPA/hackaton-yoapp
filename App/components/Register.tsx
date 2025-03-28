import { StyleSheet, View, Pressable, Dimensions, TextInput } from 'react-native';
import React from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { IconStyles } from './ui/IconStyles';
import { largeButtonStyles } from './ui/largeButtonStyles';

import TitleComponent from '@/components/ui/TitleComponent';


export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;

const Register = () => {

    const [number, onChangeNumber] = React.useState('');
    
    return (
        <ThemedView>
            <TitleComponent text='Hola!'/>

            <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Phone"
            keyboardType="numeric"
            />

            <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="PIN"
            keyboardType="numeric"
            />
        </ThemedView>
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


export default Register;
