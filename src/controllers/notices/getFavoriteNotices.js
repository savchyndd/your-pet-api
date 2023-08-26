const { Notice } = require("../../models");

const { httpError } = require("../../helpers");

const getFavoriteNotices = async (req, res) => {
  const { _id: userAddedFavorite } = req.user;
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const favoriteNotices = await Notice.find(
    {
      idUsersAddedFavorite: userAddedFavorite,
    },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  );

  if (!favoriteNotices) throw httpError(404, "Not Found");

  res.status(200).json(favoriteNotices);
};

module.exports = getFavoriteNotices;
