const asyncHandler = require("express-async-handler");

const getNews = require("./getNews");

module.exports = {
  getNews: asyncHandler(getNews),
};
