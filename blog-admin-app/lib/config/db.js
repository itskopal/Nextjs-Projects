// import mongoose from "mongoose";

// export const connectDb = async () => {
//   await mongoose.connect(
//     "mongodb+srv://itskopal021:codewithkopal@cluster0.snuziuf.mongodb.net/blog_app"
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
    await mongoose.connect("mongodb+srv://itskopal021:codewithkopal@cluster0.snuziuf.mongodb.net/blog_app");
    console.log("DB connected.");
  } catch (error) {
    console.error("DB connection error:", error);
    throw error;
  }
};
