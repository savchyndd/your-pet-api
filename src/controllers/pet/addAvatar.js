const path = require("path");
const { fs } = require("fs/promises");
const { tryCatchWrapper } = require('../../helpers/index');
const { MyPet } = require('../../models/pet');
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../", "../", "public", "pets");

const addAvatar = async (req, res) => {
  const { _id } = req.params;
  const { path: tempUpload, originalname } = req.file;
  const avatarName = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, avatarName);
  await fs.rename(tempUpload, resultUpload);
  Jimp.read(resultUpload, (err, avatar) => {
    if (err) throw err;
    avatar.resize(250, 250).write(resultUpload);
  });
  const avatarURL = path.join("avatars", avatarName);

  // const avatarURL = path;

  await MyPet.findByIdAndUpdate(petId, { avatarURL });

  res.json({ avatarURL });
};



module.exports = { addAvatar: tryCatchWrapper(addAvatar) };