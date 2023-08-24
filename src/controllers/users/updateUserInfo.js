const { httpError } = require("../../helpers");
const { User } = require("../../models");
const uploadAvatar = require("../../utils/uploadAvatar");

const updateUserInfo = async (req, res) => {
  const { _id } = req.user;
  let updatedUser = {};

  if (!req.body || !req.file) throw httpError(400, "Missing any field");

  if (req.file) updatedUser.avatarURL = await uploadAvatar(req);
  if (req.body) updatedUser = { ...req.body };

  const { name, email, avatarURL, birthday, phone, city } =
    await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });

  if (!name || !email) throw httpError(404, "Not found");

  res.status(201).json({ _id, name, email, avatarURL, birthday, phone, city });
};

module.exports = updateUserInfo;
