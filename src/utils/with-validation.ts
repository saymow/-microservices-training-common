import { ValidationChain } from "express-validator";
import { validateRequest } from "../middlewares";

export function withValidation(...validationChain: ValidationChain[]) {
  return [validationChain, validateRequest];
}
