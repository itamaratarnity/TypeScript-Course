import express from 'express';
import { logger } from './logger';

const app = express();
const port = 3000;

app.use(logger);

app.get('/', (_req, res) => {
  res.send('Hello Logger!');
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});