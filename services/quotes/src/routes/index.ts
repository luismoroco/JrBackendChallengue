import { Router } from "express";
import { quoteDriver } from "../controller/quotes";

const root = Router();

root.post('/quote', quoteDriver.getRandomQuote);
root.get('/quotes', quoteDriver.getQuotesSorted);

export default root;