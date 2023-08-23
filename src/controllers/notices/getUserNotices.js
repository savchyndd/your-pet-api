const { httpError } = require("../../helpers");

const { Notice } = require("../../models");
const getUserNotices = async (req, res) => {
  const { _id: owner } = req.user;

  const userNotices = await Notice.find({
    owner: owner,
  });

  if (!userNotices) throw httpError(404, "Not Found");

  res.status(200).json(userNotices);
};

module.exports = getUserNotices;
