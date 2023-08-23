const { MyPet } = require('../../models/pet');
const { httpError, tryCatchWrapper } = require('../../helpers/index');

const getMyPet = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await MyPet.find({ owner });
  if (!result) {
    throw httpError(404, `Pets not found`);
  }
  res.json(result);
};

module.exports = { getMyPet: tryCatchWrapper(getMyPet) };