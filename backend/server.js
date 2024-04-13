// package imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
//file(routes) imports
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./DB/connectToMongoDB.js";
import userRoutes from "./routes/user.routes.js";
//variables
const app = express();
const PORT = process.env.PORT || 5000;

//dotenv config
dotenv.config();

//middleware to parse json data (from req.body in controllers)
app.use(express.json());
app.use(cookieParser()); // to parse cookies

// authentication //
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

//listen to port //
app.listen(5000, () => {
  connectToMongoDB();
  console.log(`app is running on port ${PORT}`);
});
