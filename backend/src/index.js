import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";


dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log("server is running on Port:" + PORT);
    connectDB()

});