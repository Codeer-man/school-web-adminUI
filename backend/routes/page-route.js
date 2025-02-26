const express = require("express");
const CreateBlog = require("../controller/blog-controller");

const route = express.Router();

route.post("/create", CreateBlog);

module.exports = route;
