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

// const { joiSchema } = require('../../models/pet');
// const {
//   upload,
//   validation,
//   authenticate,
// } = require('../../middlewares/index');

// router.post(
//   '/',
//   authenticate,
//   validation(joiSchema),
//   upload.single('image'),
//   addMyPet
// );
// router.get('/', authenticate, getMyPet);

// router.delete('/:petId', authenticate, removeMyPet);

// router.patch("/avatars", authenticate, upload.single("avatar"), addAvatar);

module.exports = router;
