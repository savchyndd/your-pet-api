const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { generateId } = require("../helpers");

const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,

  params: async (req, file) => {
    const { _id } = req.user;
    const originalnameWithoutType = file.originalname.replace(
      /\.(jpe?g|png)$/i,
      ""
    );
    const uniqueId = await generateId();
    let fileName = originalnameWithoutType;
    let folder;

    if (file.fieldname === "avatar") {
      folder = "avatars";
      fileName = `${_id}_${originalnameWithoutType}`;
    } else if (file.fieldname === "petAvatar") {
      folder = "pets";

      fileName = `${_id}_${uniqueId}_${originalnameWithoutType}`;
    } else {
      folder = "misc";
    }

    return {
      folder: folder,
      allowed_formats: ["jpg", "png"],
      public_id: fileName,
    };
  },
});

const upload = multer({ storage });

module.exports = upload;
