import { StyleSheet, View, Pressable, Dimensions, TextInput } from 'react-native';
import React, {useEffect} from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { ButtonStyles } from './ui/ButtonStyles';
import PaddingSpace from '@/components/ui/paddingSpace';

import TitleComponent from '@/components/ui/TitleComponent';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const profileSize = Dimensions.get('window').width*0.15;
export const iconSize = Dimensions.get('window').width*0.07;

const Register = () => {


    const [phone, setPhone] = React.useState('');
    const [pin, setPin] = React.useState('');


    function enviarDatos() {
        axios.post('http://192.168.2.2:3000/auth/preregister/', {
            phoneNumber: phone,
            pin: pin
        })
        .then(async function (response) { 
            console.log(response);
    
            // Guardar el teléfono en AsyncStorage
            try {
                await AsyncStorage.setItem('PhoneNumber', phone);
                console.log('Número de teléfono guardado en AsyncStorage');
            } catch (error) {
                console.error('Error guardando el dato:', error);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    

    

    return (
        <ThemedView>
            <TitleComponent text='Bienvenid@!'/>

            <PaddingSpace />

            <TextInput
            style={styles.input}
            onChangeText={setPhone}
            value={phone}
            placeholder="Número de Teléfono"
            keyboardType="numeric"
            />

            <TextInput
            style={styles.input}
            onChangeText={setPin}
            value={pin}
            placeholder="Ingresa un Pin (4 caracteres)"
            keyboardType="numeric"
            />

            <ThemedView style={ButtonStyles.buttonContainer}>    

                <Link asChild style={ButtonStyles.Button} href={'/(screen)/sms-code'}>
                <Pressable onPress={() => {
                    enviarDatos();  // Primero envía los datos
                }}>
                    <ThemedText type="defaultSemiBold">Siguiente</ThemedText>
                </Pressable>
                </Link>
                                
            </ThemedView> 

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


function saveData() {
    throw new Error('Function not implemented.');
}
/*
            <TextInput
            style={styles.input}
            onChangeText={}
            value={}
            placeholder="Número de Teléfono"
            keyboardType="numeric"
            />

            <TextInput
            style={styles.input}
            onChangeText={}
            value={}
            placeholder="Ingresa un Pin (4 caracteres)"
            keyboardType="numeric"
            />

*/