const express = require("express");
const { createPost } = require("../controller/postController");
const { protectedMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", protectedMiddleware , createPost);

module.exports = router;
