const express = require("express");
const { getDashboardData } = require("../controllers/dashboardController");

const router = express.Router();

// Route to get dashboard data
router.get("/dashboard", getDashboardData);

module.exports = router;
