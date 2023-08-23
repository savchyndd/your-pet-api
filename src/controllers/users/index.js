const register = require("./register");
const login = require("./login");
const getCurrentUser = require("./getCurrentUser");
const logout = require("./logout");
const updateUserInfo = require("./updateUserInfo");

module.exports = {
  register: register,
  login: login,
  getCurrentUser: getCurrentUser,
  logout: logout,
  updateUserInfo: updateUserInfo,
};
