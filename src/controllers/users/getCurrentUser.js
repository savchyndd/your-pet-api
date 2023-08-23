const getCurrentUser = async (req, res) => {
  const { name, email, avatarURL, birthday, phone, location } = req.user;

  res.json({ name, email, avatarURL, birthday, phone, location });
};

module.exports = getCurrentUser;
