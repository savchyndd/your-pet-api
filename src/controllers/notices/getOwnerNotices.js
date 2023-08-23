const { Notice } = require("../../models");

const { httpError } = require("../../helpers");

const getOwnerNotices = async (req, res) => {
  const { _id: owner } = req.user;

  const ownerNotices = await Notice.find({
    owner,
  });

  if (!ownerNotices) throw httpError(404, "Not Found");

  res.status(200).json(ownerNotices);
};

module.exports = getOwnerNotices;
