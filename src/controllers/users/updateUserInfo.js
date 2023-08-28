const { User } = require("../../models");

const { httpError } = require("../../helpers");

const updateUserInfo = async (req, res) => {
  const { _id } = req.user;
  let updatedUser = {};

  if (!Object.keys(req.body).length && typeof req.file === "undefined")
    throw httpError(400, "Missing any field");

  // if (req.body.email) {
  //   const user = await User.findOne({ email: req.body.email });
  //   if (user) throw httpError(409, "Email in use");
  // }

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
