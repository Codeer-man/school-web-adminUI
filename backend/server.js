require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const pageRoute = require("./routes/page-route");

const app = express();

app.use(helmet());
app.use(morgan("common"));
app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "UPDATE"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/home", pageRoute);

const PORT = 3000;
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("error connecting to db", err);
  });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
