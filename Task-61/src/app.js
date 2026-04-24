import express from 'express';
import userRoutes from './routes/userRoutes.js';
import articleRoutes from './routes/articleRoutes.js';
import { logRequests } from './middlewares/logger.js';

const app = express();
const PORT = 3000;

app.use(logRequests);
app.get('/', (req, res) => res.send("Get root route (Logged)"));

app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

app.use((err, req, res, next) => {
    res.status(500).send('Server Error');
});

app.listen(PORT, () => console.log(`Task-61 running on http://localhost:${PORT}`));
