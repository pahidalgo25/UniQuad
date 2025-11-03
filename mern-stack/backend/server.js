import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MONGO_URI);

import { connectDB } from "./config/db.js"; // make sure it is db.js and not just db
connectDB();

import express from "express";
const app = express();
app.get("/products",(req, res) => { });
app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});