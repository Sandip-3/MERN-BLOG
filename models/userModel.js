const { timeStamp } = require("console");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Email"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
      unique: [true, "Duplicate Entry"],
    },
    password: {
      type: String,
      required: [true, "Please Enter Password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
