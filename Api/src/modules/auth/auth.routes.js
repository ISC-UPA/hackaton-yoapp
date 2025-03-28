import { Router } from "express";
import authController from "./auth.controller.js";
import User from "../../models/user.model.js";

const authRouter = Router();

authRouter.post('/prelogin', authController.preLogin);
authRouter.post('/login', authController.login);

export default authRouter;