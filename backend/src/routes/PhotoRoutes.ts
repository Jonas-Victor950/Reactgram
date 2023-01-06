import express from "express";
const routerPhoto = express.Router();

// Controller
import { deletePhoto, insertPhoto } from "../controllers/PhotoController";

// Middlewares
import { photoInsertValidation } from "../validations/PhotoValidations";
import authGuard from "../middlewares/authGuard";
import validate from "../middlewares/handleValidation";
import { imageUpload } from "../middlewares/imageUpload";

// Routes
routerPhoto.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photoInsertValidation(),
  validate,
  insertPhoto
);
routerPhoto.delete("/:id", authGuard, deletePhoto)

export default routerPhoto;
