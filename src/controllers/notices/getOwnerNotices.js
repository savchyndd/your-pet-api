const { Notice } = require("../../models");

const { httpError } = require("../../helpers");

const getOwnerNotices = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const ownerNotices = await Notice.find(
    {
      owner,
    },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  );

  if (!ownerNotices) throw httpError(404, "Not Found");

  res.status(200).json(ownerNotices);
};

module.exports = getOwnerNotices;
