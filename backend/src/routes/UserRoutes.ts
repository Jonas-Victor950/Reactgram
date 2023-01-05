import express from "express";
const routerUser = express.Router();

// Controller
import { register } from "../controllers/UserController";

// Middlewares
import validate from "../middlewares/handleValidation";

// Routes
routerUser.post("/register", validate, register)

export default routerUser
