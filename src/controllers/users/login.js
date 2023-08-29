const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");

const { httpError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email: loginEmail, password: loginPassword } = req.body;
  const { _id, name, email, avatarURL, birthday, phone, location, password } =
    await User.findOne({ email: loginEmail });

  if (!email) throw httpError(401, "Email or password is wrong");

  const passCompare = await bcrypt.compare(loginPassword, password);
  if (!passCompare) throw httpError(401, "Email or password is wrong");
  const payload = {
    id: _id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "12h" });
  await User.findOneAndUpdate(_id, { token });

  res.json({
    token,
    user: { _id, name, email, avatarURL, birthday, phone, location },
  });
};

module.exports = login;
