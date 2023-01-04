import express from "express";
const routerUser = express.Router();

// Controller
import { register } from "../controllers/UserController";

// Routes
routerUser.post("/register", register)

export default routerUser
