const { Notice } = require("../../models");

const { httpError } = require("../../helpers");

const addNotice = async (req, res) => {
  const { _id, email, phone } = req.user;
  const owner = { _id, email, phone };

  if (!req.body || !req.file) throw httpError(400, "Missing any field");

  const petAvatarURL = req.file.path;

  const createdNotice = await Notice.create({
    ...req.body,
    petAvatarURL,
    owner,
  });

  res.status(201).json(createdNotice);
};

module.exports = addNotice;
