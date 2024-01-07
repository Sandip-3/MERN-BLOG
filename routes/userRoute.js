const express = require("express");
const { registerUser } = require("../controller/registerController");

const route = express.Router();

route.post("/", registerUser);

module.exports = route;
