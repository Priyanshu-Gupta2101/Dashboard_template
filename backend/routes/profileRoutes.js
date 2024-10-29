const express = require("express");
const { getProfileData } = require("../controllers/profileController");

const router = express.Router();

// Route to get profile data
router.get("/profile", getProfileData);

module.exports = router;
