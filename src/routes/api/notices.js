const express = require("express");
const asyncHandler = require("express-async-handler");

const ctrl = require("../../controllers/notices");

const {
  validateBody,
  authenticate,
  isValidId,
  upload,
} = require("../../middlewares");

const { noticeSchemas } = require("../../models");

const router = express.Router();

router.get("/", asyncHandler(ctrl.getNotices));

router.get("/favorite", authenticate, asyncHandler(ctrl.getFavoriteNotices));

router.get("/userNotices", authenticate, asyncHandler(ctrl.getOwnerNotices));

router.get("/:id", isValidId, asyncHandler(ctrl.getNoticeById));

router.delete(
  "/:id",
  isValidId,
  authenticate,
  asyncHandler(ctrl.removeOwnerNotice)
);

router.patch(
  "/:id/addFavorite",
  isValidId,
  authenticate,
  asyncHandler(ctrl.addFavoriteNotice)
);
router.patch(
  "/:id/removeFavorite",
  isValidId,
  authenticate,
  asyncHandler(ctrl.removeFavoriteNotice)
);
router.post(
  "/",
  authenticate,
  upload.single("petAvatar"),
  validateBody(noticeSchemas.addNoticeSchema),
  asyncHandler(ctrl.addNotice)
);

module.exports = router;
