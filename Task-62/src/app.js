import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/userRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1><ul><li><a href=\"/users\">Users (PUG)</a></li><li><a href=\"/articles\">Articles (EJS)</a></li></ul>");
});

app.use("/users", userRoutes);
app.use("/articles", articleRoutes);

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
