import {Schema, model} from "mongoose";

const bankCardSchema = new Schema({
    cardholderName	: {
        type: String,
        required: true,
    },
    cardNumber: {
        type: String,
        required: true,
    },
    expirationDate: {
        type: String,
        required: true,
    },
    cvv: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
}, {versionKey: false});

const paymentHistorySchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    cardNumber: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
}, 
    {versionKey: false},
    {timestamps: true}
);

const BankCardSchema = model('BankCardSchema', bankCardSchema);
const PaymentHistory = model('PaymentHistory', paymentHistorySchema);

export {BankCardSchema, PaymentHistory};

