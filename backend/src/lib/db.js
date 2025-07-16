import mangoose from "mongoose";

export const connectDB = async () => {
  try { 
    const conn = await mangoose.connect(process.env.MONGODB_URI);
    console.log(`MpmngoDB connected: ${conn.connection.host}`);
   } catch (error) {
     console.log("MangoDB connection error:", error);

   }
};