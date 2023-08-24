const getCurrentUser = async (req, res) => {
  const { _id, name, email, avatarURL, birthday, phone, location } = req.user;

  res.json({ _id, name, email, avatarURL, birthday, phone, location });
};

module.exports = getCurrentUser;
