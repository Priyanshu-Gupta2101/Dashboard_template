const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const dashboardRoutes = require("./routes/dashboardRoutes");
const profileRoutes = require("./routes/profileRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");

const PORT = process.env.PORT || 8000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    const allowedOrigins = CLIENT_URL.split(",").map((url) => url.trim());

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Range", "X-Content-Range"],
  maxAge: 600,
};

app.use(cors(corsOptions));
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
