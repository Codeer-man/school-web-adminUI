const express = require("express");
const {
  updateBanner,
  updatePrincipalMessage,
  createBanner,
  getBanner,
} = require("../controller/pages/home");

const route = express.Router();

route.post("/create", createBanner);
route.get("dannerData", getBanner);
route.patch("/UpdateBanner/:id", updateBanner);
route.put("/PrincipalMsg/:id", updatePrincipalMessage);

module.exports = route;
