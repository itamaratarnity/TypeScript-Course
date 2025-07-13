import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

import fs from 'fs';
import path from 'path';

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));

// שימוש ב־Morgan בלוג ברירת מחדל
app.use(morgan(':method :url :status :response-time ms'));

// מסלול לדוגמה
app.get('/', (req, res) => {
  res.send('Hello Morgan Logger!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
