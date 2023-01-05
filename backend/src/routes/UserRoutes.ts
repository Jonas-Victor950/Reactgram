import express from "express";
const routerUser = express.Router();

// Controller
import {
  register,
  login,
  getCurrentUser,
  update,
  getUserById,
} from "../controllers/UserController";

// Middlewares
import validate from "../middlewares/handleValidation";
import {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
} from "../validations/UserValidations";
import authGuard from "../middlewares/authGuard";
import { imageUpload } from "../middlewares/imageUpload";

// Routes
routerUser.post("/register", userCreateValidation(), validate, register);
routerUser.post("/login", loginValidation(), validate, login);
routerUser.get("/profile", authGuard, getCurrentUser);
routerUser.put(
  "/",
  authGuard,
  userUpdateValidation(),
  validate,
  imageUpload.single("profileImage"),
  update
);
routerUser.get("/:id", getUserById)

export default routerUser;
