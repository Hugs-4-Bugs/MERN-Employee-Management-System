// backend/routes/employees.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const Employee = require('../models/Employee');

router.get('/', auth, async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

router.get('/:id', auth, async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
});

router.post('/', [auth, upload], async (req, res) => {
  const { name, email, mobile, designation, gender, course } = req.body;
  const image = req.file ? req.file.path : '';
  const newEmployee = new Employee({ name, email, mobile, designation, gender, course, image });
  await newEmployee.save();
  res.json({ message: 'Employee created' });
});

router.put('/:id', [auth, upload], async (req, res) => {
  const { name, email, mobile, designation, gender, course } = req.body;
  const image = req.file ? req.file.path : '';
  await Employee.findByIdAndUpdate(req.params.id, { name, email, mobile, designation, gender, course, image });
  res.json({ message: 'Employee updated' });
});

router.delete('/:id', auth, async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
});

module.exports = router;
