const { Notice } = require("../../models");

const { httpError } = require("../../helpers");

const addFavoriteNotice = async (req, res) => {
  const { id: noticeId } = req.params;

  const updatedNotice = await Notice.findByIdAndUpdate(
    noticeId,
    {
      $addToSet: { idUsersAddedFavorite: req.user._id },
    },
    { new: true }
  );

  if (!updatedNotice) throw httpError(404, "Not found");

  res.json({ message: "Notice successfully add to favorite" });
};

module.exports = addFavoriteNotice;
