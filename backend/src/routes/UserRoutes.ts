import express from "express";
const routerUser = express.Router();

// Controller
import { register, login } from "../controllers/UserController";

// Middlewares
import validate from "../middlewares/handleValidation";
import {userCreateValidation, loginValidation} from "../validations/UserValidations";

// Routes
routerUser.post("/register", userCreateValidation(), validate, register);
routerUser.post("/login", loginValidation(), validate, login);

export default routerUser;
