import { Request, Response, NextFunction } from "express";
import CustomError from "../errors/CustomError.error";
import { StatusCodes } from "http-status-codes";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.code).json({ success: false, message: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: "Something went wrong, try again later!" });
};

export default errorHandler;
