const Blog = require("../models/blog-model");

const CreateBlog = async (req, res) => {
  try {
    const { title, event, author, message } = req.body;

    if (!title || !event || !author) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }

    const newBlog = new Blog({
      title,
      event,
      author,
      message,
    });
    await newBlog.save();

    return res
      .status(200)
      .json({ msg: "Blog created successfully", data: newBlog });
  } catch (error) {
    console.log("Invalid server error", error);
    return res.status(500).json({ msg: "Invalid server error", error: error });
  }
};

module.exports = CreateBlog;
