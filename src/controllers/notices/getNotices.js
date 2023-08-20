// const { httpError } = require("../../helpers");
const { CATEGORY_FOR_PARAMS } = require("../../constants/noticeConstants");
const { Notice } = require("../../models");

const getNotices = async (req, res) => {
  const searchParams = {};

  const {
    page = 1,
    limit = 20,
    NoticesCategoriesNav = "sell",
    NoticesSearch,
  } = req.query;
  const skip = (page - 1) * limit;

  if (typeof NoticesSearch === "undefined") {
    searchParams.NoticesSearch = "";
  } else {
    searchParams.NoticesSearch = NoticesSearch;
  }

  if (!CATEGORY_FOR_PARAMS.includes(NoticesCategoriesNav)) {
    searchParams.NoticesCategoriesNav = "sell";
  } else {
    searchParams.NoticesCategoriesNav =
      NoticesCategoriesNav === "lost-found"
        ? NoticesCategoriesNav.replaceAll("-", "/")
        : NoticesCategoriesNav.replaceAll("-", " ");
  }

  console.log(searchParams);
  const notices = await Notice.find(
    {
      category: `${searchParams.NoticesCategoriesNav}`,
      title: {
        $regex: `${searchParams.NoticesSearch}`,
        $options: "i",
      },
    },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  );

  res.status(200).json(notices);
};

module.exports = getNotices;
