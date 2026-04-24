const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// 1. Схема (Blueprint)
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    score: { type: Number, min: 0, max: 100 },
    date: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', studentSchema);

// 2. Підключення (важливо: 'db' - це назва сервісу в docker-compose)
const mongoURI = 'mongodb://db:27017/studentDB';
mongoose.connect(mongoURI)
    .then(() => console.log('✅ Mongoose connected!'))
    .catch(err => console.error('❌ Connection error:', err));

app.get('/', async (req, res) => {
    try {
        let students = await Student.find();
        
        if (students.length === 0) {
            await Student.create({ name: "Stas Liubchenko", subject: "Mongoose", score: 98 });
            students = await Student.find();
        }

        res.send(`
            <body style="background: #121212; color: #00ff00; font-family: monospace; padding: 50px;">
                <h1>🚀 HW 70.1: Mongoose Refactoring Success</h1>
                <hr>
                <pre>${JSON.stringify(students, null, 2)}</pre>
            </body>
        `);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
