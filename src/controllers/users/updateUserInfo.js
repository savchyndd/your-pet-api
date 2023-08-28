const { User } = require("../../models");

const { httpError } = require("../../helpers");

const updateUserInfo = async (req, res) => {
  const { _id } = req.user;
  let updatedUser = {};

  if (!req.body || !req.file) throw httpError(400, "Missing any field");

  if (req.body) updatedUser = { ...req.body };
  if (req.file) updatedUser.avatarURL = req.file.path;

  const { name, email, avatarURL, birthday, phone, location } =
    await User.findByIdAndUpdate(_id, updatedUser, {
      new: true,
      runValidators: true,
    });

  if (!name || !email) throw httpError(404, "Not found");

  res
    .status(201)
    .json({ _id, name, email, avatarURL, birthday, phone, location });
};

module.exports = updateUserInfo;
