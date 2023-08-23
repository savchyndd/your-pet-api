const express = require("express");
const asyncHandler = require("express-async-handler");

const ctrl = require("../../controllers/users");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { userSchemas } = require("../../models");

const router = express.Router();

router.post(
  "/auth/register",
  validateBody(userSchemas.registerSchema),
  asyncHandler(ctrl.register)
);

router.post(
  "/auth/login",
  validateBody(userSchemas.loginSchema),
  asyncHandler(ctrl.login)
);

router.get("/current", authenticate, asyncHandler(ctrl.getCurrentUser));

router.post("/logout", authenticate, asyncHandler(ctrl.logout));

router.patch(
  "/update",
  authenticate,
  upload.single("avatar"),
  validateBody(userSchemas.updateUserSchema),
  asyncHandler(ctrl.updateUserInfo)
);

module.exports = router;
