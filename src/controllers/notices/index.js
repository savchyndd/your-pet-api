const getNotices = require("./getNotices");
const getNoticeById = require("./getNoticeById");
const addFavoriteNotice = require("./addFavoriteNotice");
const getFavoriteNotices = require("./getFavoriteNotices");
const removeFavoriteNotice = require("./removeFavoriteNotice");

module.exports = {
  getNotices: getNotices,
  getNoticeById: getNoticeById,
  addFavoriteNotice: addFavoriteNotice,
  getFavoriteNotices: getFavoriteNotices,
  removeFavoriteNotice: removeFavoriteNotice,
};
