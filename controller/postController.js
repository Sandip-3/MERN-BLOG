const User = require("../models/userModel");
const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

const createPost = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  const { title, content } = req.body;
  if (title && content) {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(200).json({
      title: post.title,
      content: post.content,
      user: user,
    });
  } else {
    res.status(400).json({ message: "Error Creating Post" });
  }
});

module.exports = { createPost };
