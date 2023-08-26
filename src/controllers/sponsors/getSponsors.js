const { Sponsor } = require("../../models");

const { httpError } = require("../../helpers");

const getSponsors = async (req, res) => {
  const sponsors = await Sponsor.find({}, "-createdAt -updatedAt");

  if (!sponsors) throw httpError(404, "Not Found");

  res.status(200).json(sponsors);
};

module.exports = getSponsors;
