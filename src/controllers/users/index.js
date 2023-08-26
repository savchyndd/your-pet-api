const asyncHandler = require("express-async-handler");

const register = require("./register");
const login = require("./login");
const getCurrentUser = require("./getCurrentUser");
const logout = require("./logout");
const updateUserInfo = require("./updateUserInfo");

module.exports = {
  register: asyncHandler(register),
  login: asyncHandler(login),
  getCurrentUser: asyncHandler(getCurrentUser),
  logout: asyncHandler(logout),
  updateUserInfo: asyncHandler(updateUserInfo),
};
