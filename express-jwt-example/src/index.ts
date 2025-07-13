import express from 'express';
import { generateToken, authenticateJWT } from './auth';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    const token = generateToken(username);
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.get('/protected', authenticateJWT, (req, res) => {
  res.send(`Hello ${(req as any).user.username}, you have access!`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});