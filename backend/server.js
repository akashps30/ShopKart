// require("dotenv").config();
// const app = require("./app");
// const cloudinary = require("cloudinary");
// const connectDatabase = require("./config/database");

// // Handling Uncaught Exception
// process.on("uncaughtException", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down the server due to Uncaught Exception`);
//   process.exit(1);
// });

// // Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({ path: "backend/config/config.env" });
// }

// // Connecting to database
// connectDatabase();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const server = app.listen(process.env.PORT, () => {
//   console.log(`Server is working on http://localhost:${process.env.PORT}`);
// });

// // Unhandled Promise Rejection
// process.on("unhandledRejection", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down the server due to Unhandled Promise Rejection`);

//   server.close(() => {
//     process.exit(1);
//   });
// });


require("dotenv").config();
const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// Handling Uncaught Exceptions (e.g., undefined variables)
process.on("uncaughtException", (err) => {
  console.error(` Uncaught Exception: ${err.message}`);
  console.error(" Shutting down the server...");
  process.exit(1);
});

// Load environment variables correctly
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Connect to the database
connectDatabase();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start the server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Handle Unhandled Promise Rejections (e.g., MongoDB connection errors)
process.on("unhandledRejection", (err) => {
  console.error(` Unhandled Rejection: ${err.message}`);
  console.error(" Shutting down the server...");

  server.close(() => {
    process.exit(1);
  });
});

// Graceful Shutdown on SIGTERM (useful for Docker, Cloud Deployments)
process.on("SIGTERM", () => {
  console.log(" SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("Process terminated!");
  });
});
