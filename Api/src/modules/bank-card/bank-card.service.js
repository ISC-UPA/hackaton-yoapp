import BankCardSchema from "../../models/payment.model.js";
import jwt from 'jsonwebtoken';

const generateBankCardKey = (data) => {

    const firstPart = data.cardNumber.slice(0, 4) + data.cardholderName[0];
    const middlePart = data.cardNumber.slice(-4) + data.expirationDate + data.cardholderName[1];
    const lastPart = data.cvv + data.cardholderName[2] + data.phoneNumber.slice(-4);

    const key = data.cardholderName[1] + lastPart + firstPart + middlePart;

};

const encryptBankCard = (data) => {
    const key = generateBankCardKey(data);

    const payload = {
        iss: process.env.JWT_ISSUER,
        aud: process.env.JWT_AUDIENCE,
        iat: Math.floor(Date.now() / 1000),
        data: {
            cardNumber: data.cardNumber,
            cardholderName: data.cardholderName,
            expirationDate: data.expirationDate,
            cvv: data.cvv,
            phoneNumber: data.phoneNumber
        },
    };
    
    return jwt.sign(data, key);
}

const getBankCards = async (email) => {
    try {

        const bankCards = await BankCardSchema.find({ email });

        if (!bankCards.length) return 'No bank cards found';

        return bankCards;
    } catch (error) {
        return 'No bank cards found';
    }
};

const getBankCard = async (cardId) => {
    try {

        const bankCard = await BankCardSchema.findById(cardId);

        if (!bankCard) return 'No bank card found';

        return bankCard;
    } catch (error) {
        return 'No bank card found';
    }
};

const createBankCard = async (data) => {
    try {

        const bankCard = new BankCardSchema(data);
        const response = await bankCard.save();

        return response;
    } catch (error) {
        return 'Error creating bank card';
    }
};

const updateBankCard = async (cardId, data) => {
    try {

        const bankCard = await getBankCard(cardId);

        if (bankCard === 'No bank card found') return 'No bank card found';

        const response = await BankCardSchema.findOneAndUpdate({ cardNumber }, data, { new: true });

        if (!response) return 'Error updating bank card';

        return "Updated bank card";
    } catch (error) {
        return 'Error updating bank card';
    }
};

const deleteBankCard = async (cardId) => {
    try {
        const bankCard = await getBankCard(cardId);

        if (bankCard === 'No bank card found') return 'No bank card found';

        const response = await BankCardSchema.findByIdAndDelete(cardId);

        if (!response) return 'Error deleting bank card';

        return 'Bank card deleted';
    } catch (error) {
        return 'Error deleting bank card';
    }
};

export default {
    getBankCards,
    getBankCard,
    createBankCard,
    updateBankCard,
    deleteBankCard
};