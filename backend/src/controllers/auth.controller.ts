import { Request, Response } from "express";
import { validationResult, matchedData } from "express-validator";
import { StatusCodes } from "http-status-codes";
import CustomError from "../errors/CustomError.error";
import User from "../models/User.model";

export const signup = async (req: Request, res: Response) => {
  // check validation errors
  let errors = validationResult(req);
  if (!errors.isEmpty())
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: errors.array() });
  let data = matchedData(req);

  // user already registered
  const foundUser = await User.findOne({ email: data.email }).exec();
  if (foundUser)
    throw new CustomError(
      "User with this email is already registered",
      StatusCodes.CONFLICT
    );
  // registering new user
  const newUser = await User.create(data);
  const { password: hashedPwd, ...rest } = newUser._doc;
  res.status(StatusCodes.CREATED).json(rest);
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
