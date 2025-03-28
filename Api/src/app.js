import express, { json } from 'express';
import { config } from 'dotenv';

import connect from './database/config.js';
import * as routes from './Routes/routes.js';
import guard from './guards/guard.js'; 

config();
const app = express();
const port = process.env.PORT || 3000;
connect();

app.use(express.json());
//app.use(guard);
app.use('/cards', routes.cardsRouter);
app.use('/users', routes.userRouter);
app.use('/auth', routes.authRouter);
//app.use('/buses', routes.busRouter);
app.use('/payment/bank-cards', routes.bankCardRouter);

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});