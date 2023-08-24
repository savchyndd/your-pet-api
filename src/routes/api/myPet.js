const express = require('express');

const router = express.Router();

const {
  removeMyPet,
  addMyPet,
  getMyPet,
} = require('../../controllers/pet/index');

const { joiSchema } = require('../../models/pet');
const {
  upload,
  validation,
  authenticate,
} = require('../../middlewares/index');

router.post(
  '/',
  authenticate,
  validation(joiSchema),
  upload.single('image'),
  addMyPet
);
router.get('/', authenticate, getMyPet);

router.delete('/:petId', authenticate, removeMyPet);

module.exports = router;