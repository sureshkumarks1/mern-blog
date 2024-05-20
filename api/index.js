import express from "express";
import mongoose from "mongoose";
import userRouter from "./models/routes/user.route.js";
import dotenv from "dotenv";

dotenv.config();

// mongoose.connect(
//   "mongodb+srv://sureshkumarks1@gmail.com:<password>@cluster0.fy4qlsh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// );

const app = express();

app.listen(3000, () => {
  console.log("Server running in port 3000");
});

app.use("/api/user", userRouter);
