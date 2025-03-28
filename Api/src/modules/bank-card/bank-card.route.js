import {Router} from 'express';

import cardController from '../card/card.controller.js';

const router = Router();

router.get('/', cardController.getCards);
router.get('/:cardId', cardController.getCard);
router.post('/', cardController.createCard);
router.put('/:cardId', cardController.updateCard);
router.delete('/:cardId', cardController.deleteCard);

export default router;