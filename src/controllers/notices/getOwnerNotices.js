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

  const totalNotices = await Notice.countDocuments({
    owner,
  });
  const totalPages = !totalNotices ? 1 : Math.ceil(totalNotices / limit);

  if (!ownerNotices) throw httpError(404, "Not Found");

  res.status(200).json({ notices: ownerNotices, totalPages });
};

module.exports = getOwnerNotices;
