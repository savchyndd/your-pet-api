const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const updateUserInfo = require("./updateUserInfo");

module.exports = {
  register: register,
  login: login,
  logout: logout,
  updateUserInfo: updateUserInfo,
};
