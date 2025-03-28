import {Schema, model} from "mongoose";

const userSchema = new Schema({
    Name: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    pin: {
        type: String,
        required: true,
    },
    temporarySmsCode: {
        type: Number,
        required: false,
    },
}, {versionKey: false});

const User = model('User', userSchema);

export default User;