const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Enter all field" });
  }
  const saltRound = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, saltRound);
  res
    .status(201)
    .json({ message: `Email : ${email} and Password : ${hashedPassword}` });
});

module.exports = { registerUser };
