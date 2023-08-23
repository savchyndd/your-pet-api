const { Notice } = require("../../models");

const { httpError } = require("../../helpers");

const getNoticeById = async (req, res) => {
  const { id: noticeId } = req.params;

  const notice = await Notice.findById(noticeId);

  if (!notice) throw httpError(404, "Not found");

  res.status(200).json(notice);
};

module.exports = getNoticeById;
