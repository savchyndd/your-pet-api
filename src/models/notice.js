const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");
const { NAME_REGEX, BIRTHDAY_REGEX } = require("../constants/regex");
const { SEX, CATEGORY } = require("../constants/noticeConstants");
const isHasRequireCategory = require("../utils/isHasRequireCategory");

const noticeSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
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
    required: [true, "birthday is required"],
  },
  petAvatarURL: {
    type: String,
    required: [true, "birthday is required"],
  },
  place: {
    type: String,
    default: "",
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
    default: "",
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
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

noticeSchema.post("save", handleMongooseError);
const Notice = model("notices", noticeSchema);

const getNoticesSchema = Joi.object({
  category: Joi.string(),
});

const noticeSchemas = {
  getNoticesSchema,
};

module.exports = { Notice, noticeSchemas };
