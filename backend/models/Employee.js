const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String },
  designation: { type: String },
  gender: { type: String },
  course: { type: String },
  image: { type: String },
  createDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', employeeSchema);
