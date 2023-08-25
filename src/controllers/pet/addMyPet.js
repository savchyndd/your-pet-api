const { MyPet } = require('../../models/pet');
const { httpError, tryCatchWrapper } = require('../../helpers/index');

const gravatar = require("gravatar");

const addMyPet = async (req, res) => {
  const { name } = req.body;

  const pet = await MyPet.findOne({ name });
  if (pet) {
    throw httpError(409, `Pet ${name} already in use`);
  }

  const { _id: owner } = req.user;

  const newPet = req.file
    ? { avatarURL: req.file.path, owner, ...req.body }
    : { owner, ...req.body };

  const avatarURL = gravatar.url(name);
  
  const result = await MyPet.create({
    ...newPet,
    avatarURL
  });

  res.status(201).json({
    data: {
      ...result._doc,
    },
  });
};

module.exports = { addMyPet: tryCatchWrapper(addMyPet) };
