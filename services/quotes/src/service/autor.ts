import { AutorRepository } from "../repository/autor";
import { ERROR_DB } from "../utils/err";
import { TAutor } from "../utils/type";

export const AutorService = {
  repository: new AutorRepository(), 

  async save(body: TAutor): Promise<void> {
    try {
      await this.repository.save(body);
    } catch (error) {
      throw new Error(ERROR_DB); 
    }
  }, 

  async getAll(): Promise<TAutor[]> {
    const data = await this.repository.getAll();
    return data;
  }
}