const express = require("express");

const ctrl = require("../../controllers/pets");

const {
  validateBody,
  authenticate,
  isValidId,
  upload,
} = require("../../middlewares");

const { petSchemas } = require("../../models");

const router = express.Router();

router.get("/", authenticate, ctrl.getPetsWithOwner);

router.post(
  "/",
  authenticate,
  upload.single("petAvatar"),
  validateBody(petSchemas.addPetSchema),
  ctrl.addPet
);

router.delete("/:id", isValidId, authenticate, ctrl.removePet);

module.exports = router;
