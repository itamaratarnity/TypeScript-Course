import express from 'express';
import mongoose from 'mongoose';
import studentRoutes from './routes/student.routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/students', studentRoutes);

mongoose.connect('mongodb://localhost:27017/school')
  .then(() => {
    console.log('📡 Connected to MongoDB');
    app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));