const profileData = require("../json/profile.json");

const getProfileData = (req, res) => {
  try {
    res.status(200).json(profileData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile data" });
  }
};

module.exports = { getProfileData };
