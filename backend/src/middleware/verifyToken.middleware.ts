import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization || req.headers.Authorization;

  // if (!token)
};

export default verifyToken;
