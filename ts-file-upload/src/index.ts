import express from 'express';
import fileRouter from './routes/fileRouter';

const app = express();

app.use(express.json());

// שימוש ב- Router
app.use('/api', fileRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
