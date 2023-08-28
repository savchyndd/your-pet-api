const asyncHandler = require("express-async-handler");

const addPet = require("./addPet");
const removePet = require("./removePet");
const getPetsWithOwner = require("./getPetsWithOwner");

module.exports = {
  addPet: asyncHandler(addPet),
  removePet: asyncHandler(removePet),
  getPetsWithOwner: asyncHandler(getPetsWithOwner),
};
