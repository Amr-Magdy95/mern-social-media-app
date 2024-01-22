import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import notFound from "./middleware/404.middleware";
import errorHandler from "./middleware/errorHandling.middleware";

const app = express();
const PORT = process.env.PORT || 5000;

// middlware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// routes
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Social Media App Entry" });
});

// 404 and error handling
app.all("*", notFound);
app.use(errorHandler);

// DB connection and Server Listening
const start = async () => {
  try {
    console.log("Connecting to the db...");
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected to the db!");
    app.listen(PORT, () =>
      console.log(`Server has now started listening on port: ${PORT}`)
    );
  } catch (err) {
    console.log(err);
  }
};
start();
