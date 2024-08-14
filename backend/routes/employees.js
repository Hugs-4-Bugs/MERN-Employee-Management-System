const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const Employee = require('../models/Employee');

// GET all employees
router.get('/', auth, async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error });
  }
});

// POST create a new employee
router.post('/', [auth, upload.single('image')], async (req, res) => {
  try {
    const { name, email, mobile, designation, gender, course } = req.body;

    // Server-side validation
    if (!name || !email || !mobile || !designation || !gender || !course) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Validate mobile number format
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      return res.status(400).json({ message: 'Invalid mobile number format' });
    }

    // Check for duplicate email
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Only allow jpg/png files for image upload
    if (req.file && !['image/jpeg', 'image/png'].includes(req.file.mimetype)) {
      return res.status(400).json({ message: 'Only jpg and png files are allowed for the image' });
    }

    const image = req.file ? req.file.path : '';
    const newEmployee = new Employee({ name, email, mobile, designation, gender, course, image });
    await newEmployee.save();

    res.status(201).json({ message: 'Employee created', employee: newEmployee });
  } catch (error) {
    res.status(500).json({ message: 'Error creating employee', error: error.message });
  }
});

// PUT update an employee
router.put('/:id', [auth, upload.single('image')], async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, mobile, designation, gender, course } = req.body;

    // Server-side validation
    if (!name || !email || !mobile || !designation || !gender || !course) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Validate mobile number format
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      return res.status(400).json({ message: 'Invalid mobile number format' });
    }

    // Check if updating email to an existing one
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee && existingEmployee._id.toString() !== id) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Only allow jpg/png files for image upload
    if (req.file && !['image/jpeg', 'image/png'].includes(req.file.mimetype)) {
      return res.status(400).json({ message: 'Only jpg and png files are allowed for the image' });
    }

    const image = req.file ? req.file.path : '';

    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { name, email, mobile, designation, gender, course, image },
      { new: true, runValidators: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json({ message: 'Employee updated', employee: updatedEmployee });
  } catch (err) {
    res.status(500).json({ message: 'Error updating employee', error: err.message });
  }
});

// GET an employee by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employee', error });
  }
});

// DELETE an employee
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting employee', error: err.message });
  }
});

module.exports = router;
