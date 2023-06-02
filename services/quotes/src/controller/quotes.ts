import { Request, Response } from "express";
import httpStatus from "http-status";
import { QuoteService } from "../service/quote";
import { AutorService } from "../service/autor";
import { TQuote } from "../utils/type";

class QuoteController {
  async getRandomQuote(_: Request, res: Response) {
    try {
      const data = await QuoteService.getOneRandom();
      res.status(httpStatus.OK).json(data);
    } catch (error) {
      res.status(httpStatus.SERVICE_UNAVAILABLE).json({err: "error"});
    }
  }

  async getQuotesSorted(_: Request, res: Response) {
    try {
      let autors = await AutorService.getAll();
      for (const obj of autors) {
        const items = await QuoteService.getBy(obj.id as number) as TQuote[];
        console.log(items);
        obj['quotes'] = items;
      }

      res.status(httpStatus.OK).json({autors});
    } catch (error) {
      res.status(httpStatus.SERVICE_UNAVAILABLE).json({err: "error"});
    }
  }
}

export const quoteDriver = new QuoteController();