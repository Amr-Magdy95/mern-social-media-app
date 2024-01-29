import { Request, Response } from "express";
import { validationResult, matchedData } from "express-validator";
import { StatusCodes } from "http-status-codes";
import CustomError from "../errors/CustomError.error";
import User from "../models/User.model";
import bcryptjs from "bcryptjs";
import * as jwt from "jsonwebtoken";

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
  res.status(StatusCodes.CREATED).json({ success: true, user: rest });
};
export const signin = async (req: Request, res: Response) => {
  let errors = validationResult(req);
  if (!errors.isEmpty())
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: errors.array() });
  let data = matchedData(req);

  // Unmatching email or pwd
  const foundEmail = await User.findOne({ email: data.email }).exec();
  if (!foundEmail)
    throw new CustomError("Invalid Credentials", StatusCodes.UNAUTHORIZED);
  const matchPwd = await bcryptjs.compare(data.password, foundEmail.password);
  if (!matchPwd)
    throw new CustomError("Invalid Credentials", StatusCodes.UNAUTHORIZED);

  // send back auth data
  const accessToken = jwt.sign(
    { email: foundEmail.email, firstname: foundEmail.firstName },
    process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: 1000 * 60 * 60 * 24 }
  );
  const { password: hashedPwd, ...rest } = foundEmail._doc;

  res.status(StatusCodes.OK).json({ success: true, accessToken, ...rest });
};
export const signout = async (req: Request, res: Response) => {
  res.json({ message: "sign out" });
};
