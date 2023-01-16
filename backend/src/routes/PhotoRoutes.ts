import express from "express";
const routerPhoto = express.Router();

// Controller
import {
  commentPhoto,
  deletePhoto,
  getAllPhotos,
  getPhotoById,
  getUserPhotos,
  insertPhoto,
  likePhoto,
  searchPhotos,
  updatePhoto,
} from "../controllers/PhotoController";

// Middlewares
import {
  photoInsertValidation,
  photoUpdateValidation,
  commentValidation,
} from "../validations/PhotoValidations";
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
routerPhoto.delete("/:id", authGuard, deletePhoto);
routerPhoto.get("/", authGuard, getAllPhotos);
routerPhoto.get("/user/:id", authGuard, getUserPhotos);
routerPhoto.get("/search", authGuard, searchPhotos);
routerPhoto.get("/:id", authGuard, getPhotoById);
routerPhoto.put(
  "/:id",
  authGuard,
  photoUpdateValidation(),
  validate,
  updatePhoto
);
routerPhoto.put("/like/:id", authGuard, likePhoto);
routerPhoto.put(
  "/comment/:id",
  authGuard,
  commentValidation(),
  validate,
  commentPhoto
);

export default routerPhoto;
