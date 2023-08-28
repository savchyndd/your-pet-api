const { Pet } = require("../../models");

const { httpError } = require("../../helpers");

const getPetsWithOwner = async (req, res) => {
  const {
    _id: owner,
    name,
    email,
    avatarURL,
    birthday,
    phone,
    location,
  } = req.user;

  const ownerWithPets = await Pet.find(
    { owner },
    "-createdAt -updatedAt -owner"
  );

  if (!ownerWithPets) throw httpError(404, "Not Found");

  res.status(200).json({
    pets: ownerWithPets,
    owner: { _id: owner, name, email, avatarURL, birthday, phone, location },
  });
};

module.exports = getPetsWithOwner;
