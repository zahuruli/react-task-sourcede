import taskModel from "../models/taskModel.js";
import fs from "fs";

export const uploadFileController = async (req, res, next) => {
  try {
    let photos = await new taskModel({});

    if (req.file) {
      photos.avatar = req.file.path;
    }

    await photos.save();
    res.status(201).send({
      success: true,
      message: "Photo uploaded successfully",
      photos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while uploading",
    });
  }
};

// getAllPhotosController:

export const getAllPhotosController = async (req, res) => {
  try {
    const photos = await taskModel.find({});
    res.status(201).send({
      success: true,
      message: "All photos found successfully",
      total: photos.length,
      photos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all photos",
    });
  }
};
