const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const {
  NAME_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX,
  BIRTHDAY_REGEX,
  PHONE_NUMBER_REGEX,
} = require("../constants/regex");

const userSchema = new Schema(
  {
    name: {
      type: String,
      match: NAME_REGEX,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      match: EMAIL_REGEX,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    avatarURL: {
      type: String,
      default: "",
    },
    birthday: {
      type: String,
      match: BIRTHDAY_REGEX,
      default: "",
    },
    phone: {
      type: String,
      match: PHONE_NUMBER_REGEX,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);
const User = model("users", userSchema);

const registerSchema = Joi.object({
  name: Joi.string().pattern(NAME_REGEX).required().messages({
    "string.pattern.base":
      "Name may contain any letters, minimum 2 characters, maximum 16. For example Taras, Iryna.",
  }),
  email: Joi.string().pattern(EMAIL_REGEX).required().messages({
    "string.pattern.base":
      "Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com",
  }),
  password: Joi.string().pattern(PASSWORD_REGEX).required().messages({
    "string.pattern.base":
      "Password must contain at least one number and one uppercase and lowercase letter, and minimum 6 characters, maximum 16 characters. For example TgeV23592, 3Greioct.",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(EMAIL_REGEX).required().messages({
    "string.pattern.base":
      "Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com",
  }),
  password: Joi.string().pattern(PASSWORD_REGEX).required().messages({
    "string.pattern.base":
      "Password must contain at least one number and one uppercase and lowercase letter, and minimum 6 characters, maximum 16 characters. For example TgeV23592, 3Greioct.",
  }),
});

const updateUserSchema = Joi.object({
  name: Joi.string().pattern(NAME_REGEX).messages({
    "string.pattern.base":
      "Name may contain any letters, minimum 2 characters, maximum 16. For example Taras, Iryna.",
  }),
  email: Joi.string().pattern(EMAIL_REGEX).messages({
    "string.pattern.base":
      "Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com",
  }),
  birthday: Joi.string()
    .pattern(BIRTHDAY_REGEX)
    .messages({
      "string.pattern.base": "The date must be in the format DD-MM-YYYY.",
    })
    .allow(null, ""),
  phone: Joi.string()
    .pattern(PHONE_NUMBER_REGEX)
    .messages({
      "string.pattern.base":
        "The number must be a string in the format +380671234567.",
    })
    .allow(null, ""),
  city: Joi.string().allow(null, ""),
});

const userSchemas = {
  registerSchema,
  loginSchema,
  updateUserSchema,
};

module.exports = { User, userSchemas };
