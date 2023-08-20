// const { httpError } = require("../../helpers");
const { Notice } = require("../../models");

const getNotices = async (req, res) => {
  console.log(req);
  const searchParams = {};

  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;

  if (typeof favorite === "undefined") {
    delete searchParams.favorite;
  } else {
    searchParams.favorite = favorite;
  }

  const notices = await Notice.find(searchParams, "-createdAt -updatedAt", {
    skip,
    limit,
  });

  res.status(200).json(notices);
};

module.exports = getNotices;
