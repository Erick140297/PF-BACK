const cloudinary = require("cloudinary");
require('dotenv').config()

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY } =
  process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_SECRET,
  api_secret: CLOUDINARY_API_KEY,
  secure: true,
});

const uploadImage = async (filePath) => {
  return await cloudinary.v2.uploader.upload(filePath, {
    folder: "services",
  });
};

const deleteImage = async (publicId) => {
  return await cloudinary.v2.uploader.destroy(publicId);
};

module.exports = { uploadImage, deleteImage}