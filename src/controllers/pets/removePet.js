const { Pet } = require("../../models");

const { httpError } = require("../../helpers");

const removePet = async (req, res) => {
  const { id: petId } = req.params;
  const { _id: owner } = req.user;

  const removedPet = await Pet.findByIdAndRemove(petId, owner);

  if (!removedPet) throw httpError(404, "Not found");

  res.json({ message: "Pet successfully delete" });
};

module.exports = removePet;
