const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const dashboardRoutes = require("./routes/dashboardRoutes");
const profileRoutes = require("./routes/profileRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use("/api", dashboardRoutes);
app.use("/api", profileRoutes);
app.use("/api", portfolioRoutes);

// Error handling for CORS
app.use((err, req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    res.status(403).json({
      message: "Origin not allowed",
      error: "CORS Error",
    });
  } else {
    next(err);
  }
});

app.listen(PORT, () => {
  console.log(`Allowed origins: ${CLIENT_URL} | Running on port ${PORT}`);
});
