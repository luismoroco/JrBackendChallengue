import { Router } from "express";
import { quoteDriver } from "../controller/quotes";
import { valToken } from "../utils/validateToken";
import { authManager } from "../middlewares/middleware";
import { authController } from "../controller/auth";

const root = Router();

root.post('/quote', quoteDriver.getRandomQuote);
root.get('/quotes', valToken, authManager, quoteDriver.getQuotesSorted);

root.post('/login', authController.login);

export default root;