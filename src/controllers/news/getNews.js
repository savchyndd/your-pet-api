const { News } = require("../../models");

const { httpError } = require("../../helpers");

const getNews = async (req, res) => {
  const { NewsSearch = "" } = req.query;

  const news = await News.find(
    {
      $or: [
        {
          title: {
            $regex: `${NewsSearch}`,
            $options: "i",
          },
        },
        {
          text: {
            $regex: `${NewsSearch}`,
            $options: "i",
          },
        },
      ],
    },
    "-createdAt -updatedAt"
  );

  if (!news) throw httpError(404, "Not Found");

  res.status(200).json(news);
};

module.exports = getNews;
