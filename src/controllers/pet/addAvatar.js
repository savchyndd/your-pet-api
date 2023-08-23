const { tryCatchWrapper } = require('../../helpers/index');
const { MyPet } = require('../../models/pet');

const addAvatar = async (req, res) => {
  const { petId } = req.params;
    const { path } = req.file;
    const avatarURL = path;

  await MyPet.findByIdAndUpdate(petId, { avatarURL });

  res.json({ avatarURL });
};

module.exports = { addAvatar: tryCatchWrapper(addAvatar) };