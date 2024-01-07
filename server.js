const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/register", require("./routes/userRoute"));

PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`APP RUNNING IN PORT ${PORT}`);
});
