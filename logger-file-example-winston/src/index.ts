import express from 'express';
import { logInfo, logError } from './logger';
import fs from 'fs';
import path from 'path';

const logDir = path.join(__dirname, '..', 'logs');
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  logInfo('GET /', 'Homepage accessed');
  res.send('Logger is working!');
});

app.get('/error', (_req, res) => {
  try {
    fs.readFileSync('non-existent-file.txt');
  } catch (e: any) {
    logError('GET /error', e.message);
    res.status(500).send('An error occurred!');
  }
});

app.listen(port, () => {
  logInfo('Server', `Listening on http://localhost:${port}`);
});