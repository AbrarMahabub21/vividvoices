// package imports
import express from "express";
import dotenv from "dotenv";

//file imports
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./DB/connectToMongoDB.js";

//variables
const app = express();
const PORT = process.env.PORT || 5000;

//dotenv config
dotenv.config();

//middleware to parse json data (from req.body in controllers)
app.use(express.json());

/*app.get("/", (req, res) => {
  //root rout of the server https://localhost:5000
  res.send("hello vividvoices created by Nowrid!");
}); */

// authentication //
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  connectToMongoDB();
  console.log(`app is running on port ${PORT}`);
});
