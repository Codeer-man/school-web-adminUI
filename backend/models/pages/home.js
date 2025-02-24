const mongoose = require("mongoose");

// home page
const BannerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});
const PrincipalMessageSchema = new mongoose.Schema({
  messageTitle: {
    type: String,
    required: true,
  },
  messageContent: {
    type: String,
    required: true,
  },
  principalName: {
    type: String,
    required: true,
  },
  principalDesignation: {
    type: String,
    required: true,
  },
});

const Banner = mongoose.model("Banner", BannerSchema);
const PrincipalMessage = mongoose.model(
  "PrincipalMessage",
  PrincipalMessageSchema
);

module.exports = { Banner, PrincipalMessage };
