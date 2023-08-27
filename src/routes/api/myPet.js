const express = require('express');

const router = express.Router();

const {
  removeMyPet,
  addMyPet,
  getMyPet,
  addAvatar,
} = require('../../controllers/pet/index');

const { joiSchema } = require('../../models/pet');
const {
  upload,
  validateBody,
  authenticate,
} = require('../../middlewares/index');

router.post(
  '/',
  authenticate,
  upload.single('petAvatar'),
  validateBody(joiSchema),
  addMyPet
);
router.get('/', authenticate, getMyPet);

router.delete('/:petId', authenticate, removeMyPet);

router.patch("/avatars", authenticate, upload.single("petAvatar"), addAvatar);

module.exports = router;