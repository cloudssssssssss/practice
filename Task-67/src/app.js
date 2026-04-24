import express from "express";
import { connectDB } from "./config/db.js";
import User from "./models/User.js";

const app = express();
connectDB();

// --- ГОЛОВНА СТОРІНКА ---
app.get("/", (req, res) => {
    res.send(`
        <h1>Task-67: Cursors & Aggregation</h1>
        <ul>
            <li><a href="/seed">1. Наповнити базу (Seed)</a></li>
            <li><a href="/users-cursor">2. Використати КУРСОР (потокова обробка)</a></li>
            <li><a href="/stats">3. АГРЕГАЦІЯ (Статистика по віку та статусу)</a></li>
            <li><a href="/delete-all">Очистити базу</a></li>
        </ul>
    `);
});

// Наповнення бази даними для тестів
app.get("/seed", async (req, res) => {
    await User.deleteMany({});
    const users = await User.insertMany([
        { name: "Andrii", email: "a@test.com", age: 25, status: "active" },
        { name: "Oksana", email: "o@test.com", age: 30, status: "verified" },
        { name: "Ivan", email: "i@test.com", age: 20, status: "active" },
        { name: "Maria", email: "m@test.com", age: 35, status: "verified" }
    ]);
    res.send(`Базу наповнено! Додано ${users.length} користувачів.`);
});

// --- ВИКОРИСТАННЯ КУРСОРІВ (HW 67.1) ---
app.get("/users-cursor", async (req, res) => {
    const cursor = User.find().cursor();
    let processedNames = [];

    // Курсор не вантажить все в масив, а йде по одному запису
    await cursor.eachAsync(async (doc) => {
        console.log(`Курсор обробляє: ${doc.name}`);
        processedNames.push(doc.name);
    });

    res.send(`Обробка курсором завершена. Оброблено: ${processedNames.join(", ")} (дивись консоль сервера)`);
});

// --- АГРЕГАЦІЙНИЙ ЗАПИТ (HW 67.1) ---
app.get("/stats", async (req, res) => {
    try {
        const stats = await User.aggregate([
            {
                $group: {
                    _id: "$status", 
                    avgAge: { $avg: "$age" },       // Середній вік у групі
                    totalUsers: { $sum: 1 },        // Кількість у групі
                    minAge: { $min: "$age" }        // Наймолодший у групі
                }
            },
            { $sort: { totalUsers: -1 } }
        ]);
        res.json(stats);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get("/delete-all", async (req, res) => {
    await User.deleteMany({});
    res.send("База пуста.");
});

app.listen(3000, () => console.log("Task-67 Server: http://localhost:3000"));
