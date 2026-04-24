import express from "express";
import connectDB from "./config/db.js";
import User from "./models/User.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
connectDB();

app.get("/", (req, res) => {
    res.send("<h1>MongoDB Atlas is Live!</h1><a href='/users-db'>Fetch Users from Cloud</a>");
});

app.get("/users-db", async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) return res.send("Connected! But database is empty. Go to Atlas and Insert a Document.");
        res.json(users);
    } catch (err) {
        res.status(500).send("Error fetching data");
    }
});

app.listen(3000, () => console.log("Server: http://localhost:3000"));
