// import mongoose from "mongoose";

// export const connectDb = async () => {
//   await mongoose.connect(
//     process.env.MONGODB_URI
//   );
//   console.log("Db connected.");
// };

// lib/config/db.js
import mongoose from "mongoose";

export const connectDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    // Already connected
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected.");
  } catch (error) {
    console.error("DB connection error:", error);
    throw error;
  }
};
