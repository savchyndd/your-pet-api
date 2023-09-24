const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
require("dotenv").config();

const authRouter = require("./routes/api/users");
const noticeRouter = require("./routes/api/notices");
const petRouter = require("./routes/api/pets");
const newsRouter = require("./routes/api/news");
const sponsorsRouter = require("./routes/api/sponsors");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/users", authRouter);

app.use("/notices", noticeRouter);

app.use("/pets", petRouter);

app.use("/news", newsRouter);
app.use("/sponsors", sponsorsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server Error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
