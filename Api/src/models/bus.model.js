import {Schema, model} from "mongoose";

const busSchema = new Schema({
    route: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
}, {versionKey: false});

const Bus = model('Bus', busSchema);

export default Bus;