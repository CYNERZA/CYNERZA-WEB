import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const conntection = await mongoose.connect(process.env.MONGODB_ATLAS_URL);
        console.log(`MongoDB Connetction Successfully...`);
        console.log(`MongoDB connected: ${conntection.connection.host}`);
    } catch (error) {
        console.log("Database Connectio Failed...!", error);
        process.exit(1);
    }
};

export { connectDB }