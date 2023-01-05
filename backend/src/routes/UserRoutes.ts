import express from "express";
const routerUser = express.Router();

// Controller
import { register } from "../controllers/UserController";

// Middlewares
import validate from "../middlewares/handleValidation";
import userCreateValidation from "../validations/UserValidations";

// Routes
routerUser.post("/register", userCreateValidation(), validate, register);

export default routerUser;
