const { httpError } = require("../../helpers");

const { Notice } = require("../../models");

const getNoticeById = async (req, res) => {
  const { noticeId } = req.params;
  const notice = await Notice.findById(noticeId);

  if (!notice) throw httpError(404, "Not found");

  res.status(200).json(notice);
};

module.exports = getNoticeById;
