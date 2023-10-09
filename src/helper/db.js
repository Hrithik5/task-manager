import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "task_manager",
    });
    console.log("db connected.." );
    // console.log(connection);
  } catch (error) {
    console.log("Failed to connect with database");
    console.log(error);
  }
}