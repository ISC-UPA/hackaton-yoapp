import axios from 'axios';

async function loadCards() {
    const data: any = await axios.get('http://192.168.2.2:3000/cards/card/1234567892');
    return data;
}