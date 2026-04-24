import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/local_db';

mongoose.connect(MONGO_URI)
    .then(() => console.log('🍃 Connected to MongoDB inside Docker!'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send(`
        <body style="background: #2c3e50; color: white; font-family: sans-serif; text-align: center; padding-top: 50px;">
            <h1>🐳 Docker + Express + MongoDB 🍃</h1>
            <p style="font-size: 1.2rem;">Сервер працює в ізольованому контейнері!</p>
            <div style="background: #34495e; padding: 20px; border-radius: 10px; display: inline-block;">
                <p>Status: <strong>Connected to DB</strong></p>
                <p>Volume Sync: <strong>Enabled</strong></p>
            </div>
            <p>Спробуй змінити цей текст у <code>src/app.js</code> і зберегти — Docker оновить все сам!</p>
        </body>
    `);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
