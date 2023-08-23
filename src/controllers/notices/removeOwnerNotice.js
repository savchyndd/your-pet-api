const { Notice } = require("../../models");

const { httpError } = require("../../helpers");

const removeOwnerNotice = async (req, res) => {
  const { id: noticeId } = req.params;
  const { _id: owner } = req.user;

  const updatedNotice = await Notice.findByIdAndRemove(noticeId, owner);

  if (!updatedNotice) throw httpError(404, "Not found");

  res.json({ message: "Notice successfully delete" });
};

module.exports = removeOwnerNotice;
