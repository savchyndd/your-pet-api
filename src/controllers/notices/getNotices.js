const { Notice } = require("../../models");

const { httpError } = require("../../helpers");

const { CATEGORY_FOR_PARAMS } = require("../../constants/noticeConstants");

const getNotices = async (req, res) => {
  const searchParams = {};
  const {
    page = 1,
    limit = 12,
    NoticesCategoriesNav = "sell",
    NoticesSearch = "",
  } = req.query;
  const skip = (page - 1) * limit;

  if (!CATEGORY_FOR_PARAMS.includes(NoticesCategoriesNav)) {
    searchParams.NoticesCategoriesNav = "sell";
  } else {
    searchParams.NoticesCategoriesNav =
      NoticesCategoriesNav === "lost-found"
        ? NoticesCategoriesNav.split("-").join("/")
        : NoticesCategoriesNav.split("-").join(" ");
  }

  const notices = await Notice.find(
    {
      category: `${searchParams.NoticesCategoriesNav}`,
      title: {
        $regex: `${NoticesSearch}`,
        $options: "i",
      },
    },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  );

  const totalNotices = await Notice.countDocuments({
    category: `${searchParams.NoticesCategoriesNav}`,
    title: {
      $regex: `${NoticesSearch}`,
      $options: "i",
    },
  });
  const totalPages = !totalNotices ? 1 : Math.ceil(totalNotices / limit);

  if (!notices) throw httpError(404, "Not Found");

  res.status(200).json({ notices, totalPages });
};

module.exports = getNotices;
