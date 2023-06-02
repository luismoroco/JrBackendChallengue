import { pool } from "../config/db";
import { IGetBy, IGetOneRandom } from "../utils/interfaces";
import { TQuote } from "../utils/type";

export class QuotesRepository implements IGetOneRandom<TQuote>, IGetBy<TQuote, number> {
  async getOneRandom(): Promise<TQuote | number> {
    try {
      const query = 'SELECT quotes_row_selectrandom()';
      const res = await pool.query(query);
      return res.rows as TQuote;
    } catch (error) {
      return -1;
    }
  }

  async getBy(key: number): Promise<TQuote[] | number> {
    try {
      const query = 'SELECT * FROM quotes WHERE autor_id = $1 ORDER BY created_at ASC';
      const values = [key];
      const res = await pool.query(query, values);
      return res.rows as TQuote[];
    } catch (error) {
      return -1;
    }
  }
}