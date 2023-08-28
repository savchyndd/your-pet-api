const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const { NAME_REGEX, BIRTHDAY_REGEX } = require("../constants/regex");

const petSchema = new Schema(
  {
    petAvatarURL: {
      type: String,
      required: [true, "petAvatarURL is required"],
    },
    name: {
      type: String,
      match: NAME_REGEX,
      required: [true, "name is required"],
    },
    birthday: {
      type: String,
      match: BIRTHDAY_REGEX,
      required: [true, "birthday is required"],
    },
    type: {
      type: String,
      min: [2, "Comments shoud be more 2 symbols"],
      max: [16, "Comments shoud be less 16 symbols"],
      required: [true, "type is required"],
    },
    comments: {
      type: String,
      max: [120, "Comments shoud be less 120 symbols"],
      default: "",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { versionKey: false, timestamps: true }
);

petSchema.post("save", handleMongooseError);
const Pet = model("pets", petSchema);

const addPetSchema = Joi.object({
  name: Joi.string()
    .pattern(NAME_REGEX)
    .messages({
      "string.pattern.base":
        "name may contain any letters, minimum 2 characters, maximum 16. For example Rex, Shella.",
    })
    .required(),
  birthday: Joi.string()
    .pattern(BIRTHDAY_REGEX)
    .messages({
      "string.pattern.base": "The date must be in the format DD-MM-YYYY.",
    })
    .required(),
  type: Joi.string().min(2).max(16).required(),
  comments: Joi.string().max(120),
});

const petSchemas = {
  addPetSchema,
};

module.exports = {
  Pet,
  petSchemas,
};
