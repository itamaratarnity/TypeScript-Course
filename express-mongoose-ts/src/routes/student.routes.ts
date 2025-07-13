import express from 'express';
import Student from '../models/student.model';

const router = express.Router();

// Create student
router.post('/', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Get all students
router.get('/', async (_req, res) => {
  const students = await Student.find();
  res.json(students);
});

export default router;