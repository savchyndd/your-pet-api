// const { httpError } = require("../../helpers");
// const { Notice } = require("../../models");

const getNoticeById = async (req, res) => {
  res.status(201).json({ message: "getNoticeById" });
};

module.exports = getNoticeById;
