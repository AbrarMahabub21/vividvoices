import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  //root rout of the server https://localhost:5000
  res.send("hello vividvoices created by Nowrid!");
});

// authentication //

app.use("/api/auth", authRoutes);
//signup auth
app.get("/api/auth/signup", (req, res) => {
  res.send("signup route");
});

//login auth
app.get("/api/auth/login", (req, res) => {
  res.send("login route");
});

//logout auth
app.get("/api/auth/logout", (req, res) => {
  res.send("logout route");
});

app.listen(5000, () => {
  connectToMongoDB();
  console.log(`app is running on port ${PORT}`);
});
