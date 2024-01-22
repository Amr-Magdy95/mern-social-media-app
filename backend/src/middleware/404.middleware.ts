import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.BAD_REQUEST).json({ message: "Resource not found!" });
};

export default notFound;
