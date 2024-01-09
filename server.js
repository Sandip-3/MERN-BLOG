const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/DB");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", require("./routes/userRoute"));
app.use("/post", require("./routes/postRoute"));

PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`APP RUNNING IN PORT ${PORT}`);
});
