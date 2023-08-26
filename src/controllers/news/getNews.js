const { News } = require("../../models");

const { httpError } = require("../../helpers");

const getNews = async (req, res) => {
  const searchParams = {};
  const {
    // page = 1,
    // limit = 100,
    NewsSearch,
  } = req.query;
  // const skip = (page - 1) * limit;

  if (typeof NewsSearch === "undefined") {
    searchParams.NewsSearch = "";
  } else {
    searchParams.NewsSearch = NewsSearch;
  }

  const news = await News.find(
    {
      $or: [
        {
          title: {
            $regex: `${searchParams.NewsSearch}`,
            $options: "i",
          },
        },
        {
          text: {
            $regex: `${searchParams.NewsSearch}`,
            $options: "i",
          },
        },
      ],
    },
    "-createdAt -updatedAt"
    // {
    //   skip,
    //   limit,
    // }
  );

  if (!news) throw httpError(404, "Not Found");

  res.status(200).json(news);
};

module.exports = getNews;
