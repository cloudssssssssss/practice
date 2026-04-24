import express from 'express';
import userRoutes from './routes/userRoutes.js';
import articleRoutes from './routes/articleRoutes.js';
const app = express();
const PORT = 3000;
app.get('/', (req, res) => res.send("Get root route"));
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
