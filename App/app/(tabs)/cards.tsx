import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

import React from 'react';
import axios from 'axios';

import ParallaxScrollViewV2 from '@/components/ParallaxScrollViewV2';
import HeaderConfigV2 from '@/components/HeaderConfigV2';
import TitleComponent2 from '@/components/ui/TitleComponent2';
import PaddingSpace from '@/components/ui/paddingSpace';
import YovoyCardInfo from '@/components/yovoyCardInfo';
import AddCardButton from '@/components/ui/AddCardButton';

const Cards = () => {
    
    const card1 = {
        cardNumber: '123456789',
        cardbalance: 102,
    }
    const card2 = {
        cardNumber: '246813579',
        cardbalance: 8.70,
    }
    const card3 = {
        cardNumber: '135792468',
        cardbalance: 65.4,
    }

    const cards = [card1, card2, card3];
    

    /*
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const {data} = await axios.get('http://192.168.2.2:3000/cards/449');
                setCards(data); // Ensure your API returns an array
            } catch (error) {
                console.log(' fetching cards');
            }
        };

        fetchCards();
    }, []);    */

    return (
        <ParallaxScrollViewV2 headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }} headerImage={<HeaderConfigV2 />}>
            <TitleComponent2 text='Mis Tarjetas' />

            {cards.length > 0 ? (
                cards.map((card: { cardNumber: string; cardbalance: number; }) => (
                    <YovoyCardInfo key={parseInt(card.cardNumber)} num={parseInt(card.cardNumber)} bal={card.cardbalance} />  
                ))
            ) : (
                <TitleComponent2 text="Cargando tarjetas..." /> // Show a loading message
            )}

            <PaddingSpace />

            <AddCardButton />

        </ParallaxScrollViewV2>
    );
};

export default Cards;


/*import { Image, Text, StyleSheet, Platform, View, Dimensions, ImageBackground } from 'react-native';

import ParallaxScrollViewV2 from '@/components/ParallaxScrollViewV2';

import HeaderConfigV2 from '@/components/HeaderConfigV2';
import TitleComponent2 from '@/components/ui/TitleComponent2';
import PaddingSpace from '@/components/ui/paddingSpace';
import YovoyCardInfo from '@/components/yovoyCardInfo';

import AddCardButton from '@/components/ui/AddCardButton';

import React from 'react';
import axios from 'axios';

const profileSize = Dimensions.get('window').width*0.15;
const iconSize = Dimensions.get('window').width*0.08;


const loadCards = async() => {
    return (await axios.get('http://192.168.2.2:3000/cards/card/1234567892')
                        .then(function (data) {
                            console.log(data);
                        })
                        .catch(function (error) {
                            console.log(error);
                        }))

}

const Cards = async () => {

    const card1 = {
        cardNumber: 123456789,
        cardBalance: 102,
    }
    const card2 = {
        cardNumber: 246813579,
        cardBalance: 8.70,
    }
    const card3 = {
        cardNumber: 135792468,
        cardBalance: 65.4,
    }

    const cards = await loadCards();

    return (
        <ParallaxScrollViewV2
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        
        headerImage={
            <HeaderConfigV2 />
        }>


            <TitleComponent2 text='Mis Tarjetas'/>


            {cards.map((card: { cardNumber: string; cardbalance: number; }) => (
                    <YovoyCardInfo key={parseInt(card.cardNumber)} num={parseInt(card.cardNumber)} bal={card.cardbalance} />  
                ))}
            
            
            <PaddingSpace />

            <AddCardButton />


        
        </ParallaxScrollViewV2>
    );
}

const styles = StyleSheet.create({

    largeButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 'auto',
        height: Dimensions.get('window').width*0.15,
        margin: 0,
        marginTop: Dimensions.get('window').width*0.015,
        marginBottom: Dimensions.get('window').width*0.015,
        borderRadius: Dimensions.get('window').width*0.03,
        padding: Dimensions.get('window').width*0.03,
        backgroundColor: 'red'
    },

});

export default Cards;
*/