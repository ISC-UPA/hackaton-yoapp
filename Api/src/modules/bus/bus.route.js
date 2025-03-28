import { Router } from "express";   

import busController from "./bus.controller.js";
import busMiddleware from "./bus.middleware.js";

const busRouter = Router();

busRouter.get('/', busController.getBuses);
busRouter.get('/:busNumber', busController.getBus);
busRouter.post('/', busMiddleware.validateNewBus, busController.createBus);
busRouter.patch('/:busNumber', busMiddleware.validateUpdateBus, busController.updateBus);

export default busRouter;