import { Router } from "express";
import * as AuthController from "../controllers/auth.controller";
import {
  createLoginValidator,
  createRegisterValidator,
} from "../validators/auth.validator";

const router = Router();

// signup
router.post("/signup", createRegisterValidator(), AuthController.signup);
// signin
router.post("/signin", createLoginValidator(), AuthController.signin);
// signout
router.get("/signout", AuthController.signout);

export default router;
