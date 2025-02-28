const express = require("express");
const uploadImage = require("../controller/image-Controller");
const uploadMiddleware = require("../middleware/upload-Middleware");

const route = express.Router();

route.post("/imageUpload", uploadMiddleware.single("image"), uploadImage);

module.exports = route;
