import express from "express";
import { connectDB } from "./config/db.js";
import User from "./models/User.js";

const app = express();
connectDB();

// --- ГОЛОВНА СТОРІНКА ---
app.get("/", (req, res) => {
    res.send(`
        <h1>Task-66: MongoDB CRUD Operations</h1>
        <p>Використовуйте ці маршрути для керування даними:</p>
        <ul>
            <li><a href="/add-one">Додати одного (insertOne)</a></li>
            <li><a href="/add-many">Додати багатьох (insertMany)</a></li>
            <li><a href="/users-names">Читати імена (Projection)</a></li>
            <li><a href="/update-one">Оновити одного (updateOne)</a></li>
            <li><a href="/update-many">Оновити всіх (updateMany)</a></li>
            <li><a href="/replace-one">Замінити одного (replaceOne)</a></li>
            <li><a href="/delete-one">Видалити одного (deleteOne)</a></li>
            <li><a href="/delete-all">Видалити всіх (deleteMany)</a></li>
        </ul>
    `);
});

// --- СТВОРЕННЯ (CREATE) ---
app.get("/add-one", async (req, res) => {
    const user = await User.create({ name: "Solo Hero", email: "hero@test.com" });
    res.send(`Створено: ${user.name}`);
});

app.get("/add-many", async (req, res) => {
    const users = await User.insertMany([
        { name: "First Dev", email: "1@dev.com", status: "active" },
        { name: "Second Dev", email: "2@dev.com", status: "active" }
    ]);
    res.send(`Додано ${users.length} користувачів`);
});

// --- ЧИТАННЯ З ПРОЕКЦІЄЮ (READ) ---
app.get("/users-names", async (req, res) => {
    // Повертаємо тільки імена (1), ігноруємо ID (0)
    const users = await User.find({}, { name: 1, _id: 0 });
    res.json(users);
});

// --- ОНОВЛЕННЯ (UPDATE) ---
app.get("/update-one", async (req, res) => {
    await User.updateOne({ email: "hero@test.com" }, { name: "Updated Hero" });
    res.send("Ім'я героя оновлено!");
});

app.get("/update-many", async (req, res) => {
    await User.updateMany({ status: "active" }, { status: "verified" });
    res.send("Всі активні користувачі тепер 'verified'");
});

app.get("/replace-one", async (req, res) => {
    await User.replaceOne({ email: "1@dev.com" }, { name: "Totally New User", email: "new@user.com" });
    res.send("Користувача повністю замінено");
});

// --- ВИДАЛЕННЯ (DELETE) ---
app.get("/delete-one", async (req, res) => {
    await User.deleteOne({ email: "hero@test.com" });
    res.send("Одного користувача видалено");
});

app.get("/delete-all", async (req, res) => {
    await User.deleteMany({});
    res.send("Колекцію повністю очищено");
});

app.listen(3000, () => console.log("Server: http://localhost:3000"));
