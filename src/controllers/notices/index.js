const getNotices = require("./getNotices");
const getNoticeById = require("./getNoticeById");
const addFavoriteNotice = require("./addFavoriteNotice");
const getFavoriteNotices = require("./getFavoriteNotices");
const removeFavoriteNotice = require("./removeFavoriteNotice");
const getOwnerNotices = require("./getOwnerNotices");
const removeOwnerNotice = require("./removeOwnerNotice");

module.exports = {
  getNotices: getNotices,
  getNoticeById: getNoticeById,
  addFavoriteNotice: addFavoriteNotice,
  getFavoriteNotices: getFavoriteNotices,
  removeFavoriteNotice: removeFavoriteNotice,
  getOwnerNotices: getOwnerNotices,
  removeOwnerNotice: removeOwnerNotice,
};
