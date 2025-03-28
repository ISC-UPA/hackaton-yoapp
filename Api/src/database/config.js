import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

const connect = async () => {

    try {
        const mooongose = mongoose;
        await mooongose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Database connected successfully');

    } catch (error) {

        console.log('Database connection failed ' + error);
    }

};

export default connect;

