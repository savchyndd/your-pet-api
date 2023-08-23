const { Notice } = require("../../models");

const { httpError } = require("../../helpers");

const removeFavoriteNotice = async (req, res) => {
  const { id: noticeId } = req.params;

  const updatedNotice = await Notice.findByIdAndUpdate(
    noticeId,
    {
      $pull: { idUsersAddedFavorite: req.user._id },
    },
    { new: true }
  );

  if (!updatedNotice) throw httpError(404, "Not found");

  res.json({ message: "Notice successfully remove from favorite" });
};

module.exports = removeFavoriteNotice;
