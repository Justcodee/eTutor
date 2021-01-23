const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  Title: { type: String, required: true, unique: true },
  Code: { type: String, required: true, unique: true },
  Level: Number,
  Lecturer: { type: mongoose.Schema.Types.ObjectId, ref: 'Lecturer' },
  Day: { type: String, Enum: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'] },
  Time: { type: Number, Enum: [8, 9, 10, 11, 12, 13, 14, 15, 16] },
  Students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
