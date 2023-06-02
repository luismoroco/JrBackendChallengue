import { pool } from "../config/db";
import { ERROR_DB } from "../utils/err";
import { IGetALL, ISave } from "../utils/interfaces";
import { TAutor } from "../utils/type";

export class AutorRepository implements ISave<TAutor>, IGetALL<TAutor> {
  async save(o: TAutor): Promise<void> {
    try {
      const { name } = o;
      await pool.query('INSERT INTO autor VALUES ($1)', [name]);
    } catch (error) {
      throw new Error(ERROR_DB); 
    }
  }

  async getAll(): Promise<TAutor[]> {
    const query = 'SELECT * FROM autor ORDER BY name ASC';
    const res = await pool.query(query);
    return res.rows as TAutor[];
  }
}
