require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const gravatar = require("gravatar");

const { httpError } = require("../../helpers");

const { User } = require("../../models");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) throw httpError(409, "Email in use");

  const hashPass = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  const newUser = await User.create({
    ...req.body,
    password: hashPass,
    avatarURL,
  });

  const payload = {
    id: newUser._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "12h" });
  await User.findOneAndUpdate(newUser._id, { token });

  res.status(201).json({
    user: {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      avatarURL: newUser.avatarURL,
    },
    token,
  });
};

module.exports = register;
