const { Notice } = require("../../models");

const { httpError } = require("../../helpers");

const getOwnerNotices = async (req, res) => {
  const { _id, email, phone } = req.user;
  const owner = {
    _id,
    email,
    phone,
  };

  const { page = 1, limit = 12, NoticesSearch = "" } = req.query;
  const skip = (page - 1) * limit;

  const ownerNotices = await Notice.find(
    {
      owner,
      title: {
        $regex: `${NoticesSearch}`,
        $options: "i",
      },
    },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  );

  const totalNotices = await Notice.countDocuments({
    owner,
    title: {
      $regex: `${NoticesSearch}`,
      $options: "i",
    },
  });
  const totalPages = !totalNotices ? 1 : Math.ceil(totalNotices / limit);

  if (!ownerNotices) throw httpError(404, "Not Found");

  res.status(200).json({ notices: ownerNotices, totalPages });
};

module.exports = getOwnerNotices;
