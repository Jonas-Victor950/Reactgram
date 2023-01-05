import express from "express";
const routerPhoto = express.Router();

// Controller

// Middlewares
import { photoInsertValidation } from "../validations/PhotoValidations";
import authGuard from "../middlewares/authGuard";
import validate from "../middlewares/handleValidation";

// Routes

export default routerPhoto