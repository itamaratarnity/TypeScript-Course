import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.post('/math', (req, res) => {
  const { x, y } = req.body;
  const result = Number(x) + Number(y);
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
