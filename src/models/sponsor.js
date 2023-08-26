const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const sponsorSchema = new Schema(
  {
    title: String,
    url: String,
    addressUrl: String,
    imageUrl: String,
    address: String,
    workDays: { type: Array, default: null },
    phone: String,
    email: { type: String, default: null },
  },
  { versionKey: false, timestamps: true }
);

sponsorSchema.post("save", handleMongooseError);
const Sponsor = model("sponsors", sponsorSchema);

module.exports = { Sponsor };
