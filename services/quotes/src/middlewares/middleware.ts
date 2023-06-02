import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export const authManager = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.role === 'CLIENT') {
    res.status(httpStatus.UNAUTHORIZED).json('Access Denied! Manager ONLY!');
    return;
  }

  next();
};