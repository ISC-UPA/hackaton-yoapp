import { Router } from 'express';

import userController from './user.controller.js';
import userMiddleware from './user.middleware.js';    

const userRouter = Router();

userRouter.get('/:phoneNumber', userController.getUser);
userRouter.post('/', userMiddleware.validateNewUser, userController.createUser);
userRouter.patch('/:phoneNumber', userMiddleware.validateUpdateUser, userController.updateUser);

export default userRouter;
// Compare this snippet from src/modules/cards/card.controller.js: