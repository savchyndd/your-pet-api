const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "..", "public", "pets");

const uploadPetAvatar = async (req) => {
  const { _id } = req.user;
  const { name: petName } = req.body;
  const { path: tempUpload, originalname } = req.file;

  await Jimp.read(tempUpload).then((img) =>
    img.resize(250, 250).write(`${tempUpload}`)
  );

  const fileName = `${_id}_${petName}_${originalname}`;
  const resultUpload = path.join(avatarDir, fileName);
  await fs.rename(tempUpload, resultUpload);

  const petAvatarURL = path.join("pets", fileName);
  return petAvatarURL;
};

module.exports = uploadPetAvatar;
