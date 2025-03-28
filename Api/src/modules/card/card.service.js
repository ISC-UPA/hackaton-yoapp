import Card from "../../models/card.model.js";

const getCards = async (phoneNumber) => {
    try {
        console.log('phoneNumber', phoneNumber);
        const cards = await Card.find({phoneNumber});

        if (!cards.length) return 'No cards found';
        
        const filterCards = cards.map(card => {
            return {
                cardNumber: card.cardNumber,
                type: card.type,
                disscount: card.disscount,
                assignedTo: card.assignedTo,
                cardbalance: card.cardbalance,
                phoneNumber: card.phoneNumber
            };  
        });

        return filterCards;
    } catch (error) {
        console.log('error', error);
        return 'No cards found';
    }
};

const getCard = async (cardNumber) => {
    try {

        const card = await Card.findOne({cardNumber});

        if (!card) return 'No card found';
        
        return {
            cardNumber: card.cardNumber,
            type: card.type,
            disscount: card.disscount,
            assignedTo: card.assignedTo,
            cardbalance: card.cardbalance,
            phoneNumber: card.phoneNumber
        };
    } catch (error) {
        console.log('error', error);
        return 'No card found';
    }
};

const createCard = async (data) => {
    try {

        const card = await getCard(data.cardNumber);

        if(card !== 'No card found') return 'Card already exists';

        const newCard = new Card(data);
        const response = await newCard.save();

        return response;
    } catch (error) {
        console.log('error', error);
        return 'Error creating card';
    }
};

const updateCard = async (cardNumber, data) => {
    try{

        const card = await getCard(cardNumber);

        if(card === 'No card found') return 'No card found';
        
        //if(!card.assignedTo === "" && data.assignedTo) return 'Card already assigned';

        const response = await Card.findOneAndUpdate({cardNumber}, data, {new: true});

        if (!response) return 'Error updating card';
        

        return "Updated card";
    } catch (error) {
        return 'Error updating card';
    }
};

const payCard = async (cardNumber, data) => {
    try{

        const card = await getCard(cardNumber);
        console.log('card', card)

        if(card === 'No card found') return 'No card found';
        console.log('data.cardbalance', data.cardbalance);

        data.cardbalance = parseFloat(data.cardbalance);
        console.log('data.cardbalance', data.cardbalance);
        
        if(card.cardbalance < data.cardbalance) return 'Insufficient funds';

        if(card.type === 'preferencial' ) {
            data.cardbalance = data.cardbalance * (card.disscount/100);
        }

        const cardbalance = (card.cardbalance - data.cardbalance);

        const response = await Card.findOneAndUpdate({cardNumber}, {cardbalance}, {new: true});

        if (!response) return 'Error updating card';
        

        return "Updated card";
    } catch (error) {
        console.log('error', error);
        return 'Error updating card';
    }
}

const rechargeCard = async (cardNumber, data) => {

    try{

        const card = await getCard(cardNumber);

        if(card === 'No card found') return 'No card found';

        data.cardbalance = parseFloat(data.cardbalance);

        const cardbalance = card.cardbalance + data.cardbalance;

        const response = await Card.findOneAndUpdate({cardNumber}, {cardbalance}, {new: true});

        console.log('response', response);

        if (!response) return 'Error updating card';

        return "Updated card";
    } catch (error) {
        console.log('error', error);
        return 'Error updating card';
    }
};

const deleteCard = async (cardNumber) => {
    try {
        
        const card = await getCard(cardNumber);

        if(card === 'No card found') return 'No card found';

        const response = await Card.findOneAndUpdate({cardNumber}, {
            assignedTo: '',
            phoneNumber: ''
        }, {new: true});

        if (!response) return 'Error deleting card';

        return 'Deleted card';
    } catch (error) {
        return 'Error deleting card';
    }

};

export default {
    getCards,
    getCard,
    createCard,
    updateCard,
    deleteCard,
    rechargeCard,
    payCard
};