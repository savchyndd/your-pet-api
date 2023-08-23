const { Notice } = require("../../models");

const { httpError } = require("../../helpers");

const getFavoriteNotices = async (req, res) => {
  const { _id: userAddedFavorite } = req.user;

  const favoriteNotices = await Notice.find({
    idUsersAddedFavorite: userAddedFavorite,
  });

  if (!favoriteNotices) throw httpError(404, "Not Found");

  res.status(200).json(favoriteNotices);
};

module.exports = getFavoriteNotices;
