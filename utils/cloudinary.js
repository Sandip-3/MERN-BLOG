import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.COLUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
