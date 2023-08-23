const { httpError } = require("../../helpers");
const { Notice } = require("../../models");
const uploadPetAvatar = require("../../utils/uploadPetAvatar");

const addNotice = async (req, res) => {
  const { _id: owner } = req.user;

  if (!req.body || !req.file) throw httpError(400, "Missing any field");

  const petAvatarURL = await uploadPetAvatar(req);

  console.log(petAvatarURL);

  const createdNotice = await Notice.create({
    ...req.body,
    petAvatarURL,
    owner,
  });

  res.status(201).json(createdNotice);
};

module.exports = addNotice;
