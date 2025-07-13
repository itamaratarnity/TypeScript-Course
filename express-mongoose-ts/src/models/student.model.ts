import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
});

export default model('Student', studentSchema);