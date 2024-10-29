const dashboardData = require("../json/dashboard.json");

const getDashboardData = (req, res) => {
  try {
    res.status(200).json(dashboardData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard data" });
  }
};

module.exports = { getDashboardData };
