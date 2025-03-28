import {Schema, model} from "mongoose";

const cardSchema = new Schema({
    cardNumber: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: false,
    },
    disscount: {
        type: Number,
        required: false,
    },
    assignedTo: {
        type: String,
        required: true,
    },
    cardbalance: {
        type: Number,
        required: false,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
}, {versionKey: false});

const Card = model('Card', cardSchema);

export default Card;