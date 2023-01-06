import express from "express";
const routerPhoto = express.Router();

// Controller
import { deletePhoto, getAllPhotos, getPhotoById, getUserPhotos, insertPhoto } from "../controllers/PhotoController";

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
routerPhoto.get("/", authGuard, getAllPhotos)
routerPhoto.get("/user/:id", authGuard, getUserPhotos)
routerPhoto.get("/:id", authGuard, getPhotoById)

export default routerPhoto;
