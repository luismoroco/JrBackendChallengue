import { QuotesRepository } from "../repository/quotes";
import { TQuote } from "../utils/type";

export const QuoteService = {
  repository: new QuotesRepository(),

  async getOneRandom(): Promise<TQuote | number> {
    try {
      const data = await this.repository.getOneRandom();
      return data;
    } catch (error) {
      return -1;
    }
  },

  async getBy(key: number): Promise<TQuote[] | number> {
    const data = this.repository.getBy(key);
    return data;
  }
}