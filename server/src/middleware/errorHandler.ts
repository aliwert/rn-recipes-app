'use strict';

import { Request, Response, NextFunction } from 'express';

module.exports = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.status(res?.statusCode || 500).send({
    error: true,
    message: err.message,
    cause: err.cause,
    body: req.body,
  });
};
