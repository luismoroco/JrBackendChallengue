import { Request, Response } from "express";
import { UserService } from "../service/user";
import httpStatus from 'http-status';
import { generateToken } from "../utils/tokens";
import { TUser } from "../utils/type";

class AuthController {
  async login(req: Request, res: Response) {
    const { body } = req;
    try {
      const data = await (UserService.getDataByUsername(body.username)) as TUser[];
      if (data[0].id === -1) {
        res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .json({ msg: `User ${body.username} doesn't exist` });
        return;
      }

      if (data[0].password != body.password) {
        res.status(httpStatus.FORBIDDEN).json({ msg: `Incorrect passsword` });
        return;
      }

      const token: string = generateToken(data[0].id || 0x7, 'MANAGER');
      res.status(httpStatus.CREATED).header('auth-token', token).json(data);
    } catch (err) {
      res
      .status(httpStatus.SERVICE_UNAVAILABLE)
      .json({ msg: `Error in Login` });
    }
  }
}

export const authController = new AuthController();