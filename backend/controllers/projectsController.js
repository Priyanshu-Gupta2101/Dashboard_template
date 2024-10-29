const projectData = require("../json/data.json");
const getProjectData = (req, res) => {
  try {
    res.status(200).json(projectData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile data" });
  }
};

module.exports = { getProjectData };
