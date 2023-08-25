const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleMongooseError } = require('../helpers/index');

const petSchema = new Schema({
  category: { type: String, default: 'your pet' },
  name: {
    type: String,
    required: [true, 'Set name pet'],
  },
  date: {
    type: String,
    require: true,
  },
  birthday: {type: String},
  breed: { type: String },
  sex: { type: String },
  comments: { type: String },
  location: { type: String },
  price: { type: String },
  title: { type: String },
  avatarURL: { type: String },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
});

petSchema.post('save', handleMongooseError);

const joiSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  date: Joi.string().required(),
  birthday: Joi.string(),
  breed: Joi.string(),
  sex: Joi.string(),
  location: Joi.string(),
  price: Joi.string(),
  title: Joi.string(),
  category: Joi.string(),
  comments: Joi.string(),
  avatarURL: Joi.string(),
});

const MyPet = model('pet', petSchema);

module.exports = {
  MyPet,
  joiSchema,
};