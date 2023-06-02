import { pool } from "../config/db";
import { IGetOneBy } from "../utils/interfaces";
import { ErrTUser, TUser } from "../utils/type";

export class UserRepository implements IGetOneBy<TUser, string> {
  async getOneBy(key: string): Promise<TUser> {
    try {
      const query = 'SELECT * FROM users WHERE username = $1 LIMIT 1';
      const values = [key];
      const res = await pool.query(query, values);
      return res.rows as TUser;
    } catch {
      return Promise.resolve(ErrTUser);
    }
  }
}