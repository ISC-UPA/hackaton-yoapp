import { Router } from 'express';
import cardsController from './card.controller.js';
import cardsMiddleware from './card.middleware.js';
const cardsRouter = Router();

cardsRouter.get('/:phoneNumber', cardsController.getCards);
cardsRouter.get('/card/:cardNumber', cardsController.getCard);
cardsRouter.post('/', cardsMiddleware.validateNewCard ,cardsController.createCard);
cardsRouter.patch('/:cardNumber',cardsMiddleware.validateUpdateCard, cardsController.updateCard);
cardsRouter.patch('/recharge/:cardNumber', cardsController.rechargeCard);
cardsRouter.patch('/pay/:cardNumber', cardsController.payCard);
cardsRouter.delete('/:cardNumber', cardsController.deleteCard); //? pendiente por semantica tendria que ser un patch

export default cardsRouter;