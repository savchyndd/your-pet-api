const asyncHandler = require("express-async-handler");

const getSponsors = require("./getSponsors");

module.exports = {
  getSponsors: asyncHandler(getSponsors),
};
