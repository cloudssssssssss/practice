import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import userRoutes from "./routes/userRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";
import { verifyToken } from "./middlewares/authJWT.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const SECRET_KEY = "my_super_secret_key";

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));

app.get("/login", (req, res) => {
    const token = jwt.sign({ username: "student" }, SECRET_KEY, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });
    res.send("Logged in! JWT token saved in cookies.");
});

app.get("/set-theme/:theme", (req, res) => {
    const theme = req.params.theme;
    res.cookie("userTheme", theme);
    res.send(`Theme ${theme} saved!`);
});

app.get("/", (req, res) => {
    const theme = req.cookies.userTheme || "light";
    res.send(`<h1>Home Page (Theme: ${theme})</h1><a href="/login">Login</a> | <a href="/users">Users (Protected)</a>`);
});

app.use("/users", verifyToken, userRoutes);
app.use("/articles", articleRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
