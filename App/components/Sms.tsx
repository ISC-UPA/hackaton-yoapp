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

const Sms = () => {

    const [sms, setSms] = React.useState('');


    async function confirmarSMS(sms: string): Promise<void> {
        try {
            // Recuperar el número de teléfono de AsyncStorage
            const phoneNumber = await AsyncStorage.getItem('PhoneNumber');

            if (!phoneNumber) {
                console.error('No se encontró el número de teléfono en AsyncStorage');
                return;
            }

            // Enviar la solicitud al servidor con el número y el código SMS
            const response = await axios.post('http://192.168.2.2:3000/auth/register/', {
                phoneNumber: phoneNumber,
                temporarySmsCode: sms
            });

            if (response.data?.token) {
                try {
                    await AsyncStorage.setItem('token', response.data.token);
                    console.log('Token guardado en AsyncStorage');
                } catch (error) {
                    console.error('Error guardando el token:', error);
                }
            } else {
                console.error('La respuesta del servidor no contiene un token válido');
            }

            console.log('Respuesta del servidor:', response.data);
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    }



    return (
        <ThemedView>
            <TitleComponent text='Un paso más'/>

            <PaddingSpace />

            <TextInput
            style={styles.input}
            onChangeText={setSms}
            value={sms}
            placeholder="Código SMS"
            keyboardType="numeric"
            />


            <ThemedView style={ButtonStyles.buttonContainer}>    

                <Link asChild style={ButtonStyles.Button} href={'/(tabs)/home'}>
                    <Pressable onPress={() => confirmarSMS(sms)}>
                        <ThemedText type="defaultSemiBold">Confirmar</ThemedText>
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


export default Sms;
function getData(): any {
    throw new Error('Function not implemented.');
}

