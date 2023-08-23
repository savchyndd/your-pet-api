const express = require("express");
const asyncHandler = require("express-async-handler");

const ctrl = require("../../controllers/notices");

const { validateBody, authenticate } = require("../../middlewares");

const { noticeSchemas } = require("../../models");

const router = express.Router();

router.get(
  "/",
  validateBody(noticeSchemas.getNoticesSchema),
  asyncHandler(ctrl.getNotices)
);

router.get("/favorite", authenticate, asyncHandler(ctrl.getFavoriteNotices));

router.get("/userNotices", authenticate, asyncHandler(ctrl.getOwnerNotices));

router.get("/:noticeId", asyncHandler(ctrl.getNoticeById));

router.delete("/:noticeId", authenticate, asyncHandler(ctrl.removeOwnerNotice));

router.patch(
  "/:noticeId/addFavorite",
  authenticate,
  asyncHandler(ctrl.addFavoriteNotice)
);
router.patch(
  "/:noticeId/removeFavorite",
  authenticate,
  asyncHandler(ctrl.removeFavoriteNotice)
);

module.exports = router;
