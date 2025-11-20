import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_ATLAS_URL;
    if (!uri) {
      throw new Error("MONGODB_ATLAS_URL is not set. Configure it in environment/secrets.");
    }
    // Use dbName option so URL may or may not include a path already
    const connection = await mongoose.connect(uri, { dbName: DB_NAME });
    console.log(`MongoDB Connection Successful`);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.log("Database Connection Failed...!", error?.message || error);
    process.exit(1);
  }
};

export { connectDB }