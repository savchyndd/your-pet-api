const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");
const {
  NAME_REGEX,
  BIRTHDAY_REGEX,
  LOCATION_REGEX,
} = require("../constants/regex");
const { SEX, CATEGORY } = require("../constants/noticeConstants");
const isHasRequireCategory = require("../utils/isHasRequireCategory");

const noticeSchema = new Schema(
  {
    title: {
      type: String,
      min: [2, "Comments shoud be more 2 symbols"],
      max: [40, "Comments shoud be less 120 symbols"],
      required: [true, "title is required"],
    },
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
      match: NAME_REGEX,
      required: [true, "type is required"],
    },
    sex: {
      type: String,
      enum: {
        values: [...SEX],
        message: `Have only ${SEX.join(", ")}`,
      },
      default: SEX[0],
      required: isHasRequireCategory(this.category, "sex"),
    },
    comments: {
      type: String,
      max: [120, "Comments shoud be less 120 symbols"],
      default: "",
    },
    location: {
      type: String,
      match: LOCATION_REGEX,
      default: "",
      required: isHasRequireCategory(this.category, "location"),
    },
    category: {
      type: String,
      enum: {
        values: [...CATEGORY],
        message: `Have only ${CATEGORY.join(", ")}`,
      },
      default: CATEGORY[0],
      required: [true, "category is required"],
    },
    price: {
      type: Number,
      min: [1, "Price must be more than 0"],
      required: isHasRequireCategory(this.category, "price"),
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    idUsersAddedFavorite: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

noticeSchema.post("save", handleMongooseError);
const Notice = model("notices", noticeSchema);

const addNoticeSchema = Joi.object({
  title: Joi.string().min(2).max(40).required(),
  category: Joi.string()
    .valid(...CATEGORY)
    .required(),
  name: Joi.string().pattern(NAME_REGEX).required().messages({
    "string.pattern.base":
      "name may contain any letters, minimum 2 characters, maximum 16. For example Rex, Shella.",
  }),
  birthday: Joi.string()
    .pattern(BIRTHDAY_REGEX)
    .messages({
      "string.pattern.base": "The date must be in the format DD-MM-YYYY.",
    })
    .required(),
  type: Joi.string().min(2).max(16).required(),
  sex: Joi.string()
    .valid(...SEX)
    .when("category", {
      is: Joi.string().valid(...CATEGORY),
      then: Joi.required(),
      otherwise: Joi.optional(),
    }),
  location: Joi.string().pattern(LOCATION_REGEX).required().messages({
    "string.pattern.base":
      "The location may contain any letters. For example Lviv, Ivano-Frankivsk",
  }),
  price: Joi.number().min(1).when("category", {
    is: "sell",
    then: Joi.required(),
    otherwise: Joi.optional(),
  }),
  comments: Joi.string().max(120),
});

const noticeSchemas = {
  addNoticeSchema,
};

module.exports = { Notice, noticeSchemas };
