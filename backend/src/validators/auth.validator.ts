import { body } from "express-validator";

// validation chains
// fn, ln, password, email
const createfirstNameChain = () =>
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("Firstname cannot be empty")
    .isLength({ min: 2, max: 20 })
    .withMessage("Firstname must be between 2 and 20 chars");
const createLastNameChain = () =>
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Lastname cannot be empty")
    .isLength({ min: 2, max: 20 })
    .withMessage("Lastname must be between 2 and 20 chars");
const createEmailChain = () =>
  body("email").isEmail().withMessage("Invalid Email").normalizeEmail();
const createPasswordChain = () =>
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be between 8 and 20 chars");

// login validator
export const createLoginValidator = () => [
  createEmailChain(),
  createPasswordChain(),
];

// register validator
export const createRegisterValidator = () => [
  createfirstNameChain(),
  createLastNameChain(),
  createEmailChain(),
  createPasswordChain(),
];
