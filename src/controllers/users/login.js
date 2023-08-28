const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");

const { httpError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { _id, name, email, avatarURL, birthday, phone, location } = req.user;

  const { userEmail, password } = req.body;
  const user = await User.findOne({ userEmail });
  if (!user) throw httpError(401, "Email or password is wrong");

  const passCompare = await bcrypt.compare(password, user.password);
  if (!passCompare) throw httpError(401, "Email or password is wrong");
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "12h" });
  await User.findOneAndUpdate(user._id, { token });
  res.json({
    token,
    user: { _id, name, email, avatarURL, birthday, phone, location },
  });
};

module.exports = login;
