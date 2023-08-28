const { Notice } = require("../../models");

const { httpError } = require("../../helpers");

const getFavoriteNotices = async (req, res) => {
  const { _id: userAddedFavorite } = req.user;
  const { page = 1, limit = 12, NoticesSearch = "" } = req.query;
  const skip = (page - 1) * limit;

  const favoriteNotices = await Notice.find(
    {
      idUsersAddedFavorite: userAddedFavorite,
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
    idUsersAddedFavorite: userAddedFavorite,
    title: {
      $regex: `${NoticesSearch}`,
      $options: "i",
    },
  });
  const totalPages = !totalNotices ? 1 : Math.ceil(totalNotices / limit);

  if (!favoriteNotices) throw httpError(404, "Not Found");

  res.status(200).json({ notices: favoriteNotices, totalPages });
};

module.exports = getFavoriteNotices;
