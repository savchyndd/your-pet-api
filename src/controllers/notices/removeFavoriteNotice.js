const { httpError } = require("../../helpers");

const { Notice } = require("../../models");

const removeFavoriteNotice = async (req, res) => {
  const { noticeId } = req.params;

  const updatedNotice = await Notice.findByIdAndUpdate(
    noticeId,
    {
      $pull: { idUsersAddedFavorite: req.user._id },
    },
    { new: true }
  );

  if (!updatedNotice) throw httpError(404, "Not found");

  res.status(201).json(updatedNotice);
};

module.exports = removeFavoriteNotice;
