const express = require("express");
const { getProjectData } = require("../controllers/projectsController");

const router = express.Router();

// Route to get dashboard data
router.get("/portfolio", getProjectData);

module.exports = router;
