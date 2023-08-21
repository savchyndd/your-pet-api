const express = require("express");
const asyncHandler = require("express-async-handler");

const ctrl = require("../../controllers/notices");

const { validateBody } = require("../../middlewares");

const { noticeSchemas } = require("../../models");

const router = express.Router();

router.get(
  "/",
  validateBody(noticeSchemas.getNoticesSchema),
  asyncHandler(ctrl.getNotices)
);

router.get("/:noticeId", asyncHandler(ctrl.getNoticeById));

module.exports = router;
