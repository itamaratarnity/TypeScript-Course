import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
