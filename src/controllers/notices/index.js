const asyncHandler = require("express-async-handler");

const getNotices = require("./getNotices");
const getNoticeById = require("./getNoticeById");
const addFavoriteNotice = require("./addFavoriteNotice");
const getFavoriteNotices = require("./getFavoriteNotices");
const removeFavoriteNotice = require("./removeFavoriteNotice");
const addNotice = require("./addNotice");
const getOwnerNotices = require("./getOwnerNotices");
const removeOwnerNotice = require("./removeOwnerNotice");

module.exports = {
  getNotices: asyncHandler(getNotices),
  getNoticeById: asyncHandler(getNoticeById),
  addFavoriteNotice: asyncHandler(addFavoriteNotice),
  getFavoriteNotices: asyncHandler(getFavoriteNotices),
  removeFavoriteNotice: asyncHandler(removeFavoriteNotice),
  addNotice: asyncHandler(addNotice),
  getOwnerNotices: asyncHandler(getOwnerNotices),
  removeOwnerNotice: asyncHandler(removeOwnerNotice),
};
