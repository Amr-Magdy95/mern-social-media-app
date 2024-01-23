import { Request, Response } from "express";
import { validationResult, matchedData } from "express-validator";
import { StatusCodes } from "http-status-codes";

export const signup = async (req: Request, res: Response) => {
  let errors = validationResult(req);
  if (!errors.isEmpty())
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: errors.array() });
  let data = matchedData(req);
  res.json({ message: data });
};
export const signin = async (req: Request, res: Response) => {
  let errors = validationResult(req);
  if (!errors.isEmpty())
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: errors.array() });
  let data = matchedData(req);
  res.json({ message: data });
};
export const signout = async (req: Request, res: Response) => {
  res.json({ message: "sign out" });
};
