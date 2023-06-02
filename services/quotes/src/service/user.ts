import { UserRepository } from "../repository/user";
import { TUser } from "../utils/type";

export const UserService = {
  repository: new UserRepository(),

  async getDataByUsername(k: string): Promise<TUser> {
    const data = await this.repository.getOneBy(k);
    return data;
  }
}