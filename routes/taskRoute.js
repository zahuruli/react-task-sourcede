import express from "express";
import {
  getAllPhotosController,
  uploadFileController,
} from "../controllers/taskController.js";
import { upload } from "../middlewere/upload.js";
const router = express.Router();

//routes:
//upload-file:
router.post("/upload-file", upload.single("avatar"), uploadFileController);
router.get("/all-photos", getAllPhotosController);

export default router;
