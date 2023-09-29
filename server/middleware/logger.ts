import { Request, Response, NextFunction } from 'express';

const loggerMiddleware = (req: Request, _: Response, next: NextFunction) => {
  const ip = req.ip;
  const timestamp = new Date().toISOString();

  console.log(`Request from IP: ${ip}, Timestamp: ${timestamp}`);
  next();
};

export default loggerMiddleware;
