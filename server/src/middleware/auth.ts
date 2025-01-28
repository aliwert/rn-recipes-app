'use strict';

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extend the Request interface to include 'user'
interface CustomRequest extends Request {
  user?: any; // The 'user' property will hold the decoded JWT payload
}

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const protect = async (
  req: CustomRequest, // Use CustomRequest here
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      res.status(401).json({ message: 'No token, authorization denied' });
      return;
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
