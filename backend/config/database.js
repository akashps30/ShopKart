const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URI, {
      dbName: "test", // Optional: Specify your database name explicitly
    });

    console.log(` MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(` MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Exit process on failure
  }
};

module.exports = connectDatabase;
