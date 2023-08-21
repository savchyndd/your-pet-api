const { httpError } = require("../../helpers");

const { Notice } = require("../../models");

const getFavoriteNotices = async (req, res) => {
  const { noticeId } = req.params;

  if (!req.body) throw httpError(400, "Missing field favorite");

  const updatedNotice = await Notice.findByIdAndUpdate(noticeId, {
    $push: { idUsersAddedFavorite: { userId: req.body } },
  });
  res.status(200).json(updatedNotice);
};

module.exports = getFavoriteNotices;
