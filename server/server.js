import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import itemRoutes from "./routes/itemRoutes.js";

const app = express();
const PORT = process.env.PORT || 5001;

/* =======================
   CORS (ENHANCED)
======================= */
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    callback(null, true);
  },
  credentials: false, // Changed to true for cookie support
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
  ],
  exposedHeaders: ["Content-Range", "X-Content-Range"],
  optionsSuccessStatus: 200,
  preflightContinue: false,
};

app.use(cors(corsOptions));

/* =======================
   BODY PARSERS
======================= */
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

/* =======================
   LOGGER
======================= */
app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.path} - Origin: ${req.headers.origin || "no-origin"}`
  );
  next();
});

/* =======================
   DATABASE
======================= */
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/technofuzn_task", {
      // Add these options for better connection handling
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Error:", err.message);
    setTimeout(connectDB, 5000);
  }
};

connectDB();

/* =======================
   ROUTES
======================= */
app.use("/api/items", itemRoutes);

app.get("/api/health", (_, res) => {
  res.json({ status: "ok" });
});

app.get("/", (_, res) => {
  res.json({
    message: "Technofuzn Task Backend API",
    version: "3.0.0",
  });
});

/* =======================
   404
======================= */
app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found",
    path: req.path,
  });
});

/* =======================
   ERROR HANDLER
======================= */
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

/* =======================
   START SERVER
======================= */
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 CORS enabled for all origins`);
});

/* =======================
   GRACEFUL SHUTDOWN
======================= */
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, closing server...");
  await mongoose.connection.close();
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("SIGINT received, closing server...");
  await mongoose.connection.close();
  process.exit(0);
});
