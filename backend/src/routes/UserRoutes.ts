import express from "express";
const routerUser = express.Router();

// Controller
import { register, login, getCurrentUser } from "../controllers/UserController";

// Middlewares
import validate from "../middlewares/handleValidation";
import {userCreateValidation, loginValidation} from "../validations/UserValidations";
import authGuard from "../middlewares/authGuard"

// Routes
routerUser.post("/register", userCreateValidation(), validate, register);
routerUser.post("/login", loginValidation(), validate, login);
routerUser.get("/profile", authGuard, getCurrentUser)

export default routerUser;
