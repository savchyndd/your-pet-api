const express = require("express");

const ctrl = require("../../controllers/notices");

const {
  validateBody,
  authenticate,
  isValidId,
  upload,
} = require("../../middlewares");

const { noticeSchemas } = require("../../models");

const router = express.Router();

router.get("/", ctrl.getNotices);

router.get("/favorite", authenticate, ctrl.getFavoriteNotices);

router.get("/userNotices", authenticate, ctrl.getOwnerNotices);

router.get("/:id", isValidId, ctrl.getNoticeById);

router.delete("/:id", isValidId, authenticate, ctrl.removeOwnerNotice);

router.patch(
  "/:id/addFavorite",
  isValidId,
  authenticate,
  ctrl.addFavoriteNotice
);
router.patch(
  "/:id/removeFavorite",
  isValidId,
  authenticate,
  ctrl.removeFavoriteNotice
);
router.post(
  "/",
  authenticate,
  upload.single("petAvatar"),
  validateBody(noticeSchemas.addNoticeSchema),
  ctrl.addNotice
);

module.exports = router;
