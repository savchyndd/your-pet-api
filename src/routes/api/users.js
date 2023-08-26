const express = require("express");

const ctrl = require("../../controllers/users");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { userSchemas } = require("../../models");

const router = express.Router();

router.post(
  "/auth/register",
  validateBody(userSchemas.registerSchema),
  ctrl.register
);

router.post("/auth/login", validateBody(userSchemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrentUser);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/update",
  authenticate,
  upload.single("avatar"),
  validateBody(userSchemas.updateUserSchema),
  ctrl.updateUserInfo
);

module.exports = router;
