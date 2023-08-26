const express = require("express");
const asyncHandler = require("express-async-handler");

const ctrl = require("../../controllers/sponsors");

const router = express.Router();

router.get("/", asyncHandler(ctrl.getSponsors));

module.exports = router;
