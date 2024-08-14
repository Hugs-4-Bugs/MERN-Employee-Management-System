// require('dotenv').config();
// const mongoose = require('mongoose');
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const path = require('path');
// // Import routes
// const employeeRoutes = require('./routes/employees');


// const app = express();
// app.use(bodyParser.json());
// app.use(cors({
//   origin: 'http://localhost:3000', // Frontend URL
// }));

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// const User = require('./models/User');
// const Employee = require('./models/Employee');
// const auth = require('./middleware/auth');
// const upload = require('./middleware/upload');

// // API Routes

// // User login
// app.post('/login', async (req, res) => {
//   const { userName, password } = req.body;
//   try {
//     const user = await User.findOne({ userName });
//     if (user && bcrypt.compareSync(password, user.password)) {
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//       res.json({ token });
//     } else {
//       res.status(400).json({ message: 'Invalid credentials' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error during login', error });
//   }
// });

// // User registration
// app.post('/register', async (req, res) => {
//   const { userName, password } = req.body;
//   try {
//     const hashedPassword = bcrypt.hashSync(password, 10);
//     const newUser = new User({ userName, password: hashedPassword });
//     await newUser.save();
//     res.json({ message: 'User registered' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error during registration', error });
//   }
// });

// // Get all employees
// app.get('/employees', auth, async (req, res) => {
//   try {
//     const employees = await Employee.find();
//     res.json(employees);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching employees', error });
//   }
// });

// // Create a new employee
// app.post('/employees', [auth, upload.single('image')], async (req, res) => {
//   try {
//     const { name, email, mobile, designation, gender, course } = req.body;
//     const image = req.file ? req.file.path : '';
//     const newEmployee = new Employee({ name, email, mobile, designation, gender, course, image });
//     await newEmployee.save();
//     res.status(201).json({ message: 'Employee created', employee: newEmployee });
//   } catch (error) {
//     console.error('Error creating employee:', error);
//     res.status(500).json({ message: 'Error creating employee', error: error.message });
//   }
// });

// // Update an employee
// app.put('/employees/:id', [auth, upload.single('image')], async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, email, mobile, designation, gender, course } = req.body;
//     const image = req.file ? req.file.path : '';

//     const updatedEmployee = await Employee.findByIdAndUpdate(
//       id,
//       { name, email, mobile, designation, gender, course, image },
//       { new: true, runValidators: true }
//     );

//     if (!updatedEmployee) {
//       return res.status(404).json({ message: 'Employee not found' });
//     }

//     res.json({ message: 'Employee updated', employee: updatedEmployee });
//   } catch (err) {
//     res.status(500).json({ message: 'Error updating employee', error: err.message });
//   }
// });

// // Delete an employee
// app.delete('/employees/:id', auth, async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deletedEmployee = await Employee.findByIdAndDelete(id);

//     if (!deletedEmployee) {
//       return res.status(404).json({ message: 'Employee not found' });
//     }

//     res.json({ message: 'Employee deleted' });
//   } catch (err) {
//     res.status(500).json({ message: 'Error deleting employee', error: err.message });
//   }
// });

// // Employee routes
// app.use('/employees', employeeRoutes);


// // Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, '../frontend/build')));

// // Handle all other routes by sending the React index.html file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });

// const PORT = process.env.PORT || 5005;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
















require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

// Import routes
const employeeRoutes = require('./routes/employees');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  // Removed deprecated options
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const User = require('./models/User');
const Employee = require('./models/Employee');
const auth = require('./middleware/auth');
const upload = require('./middleware/upload');

// API Routes

// User login
app.post('/auth/login', async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ userName });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Added expiration
      res.json({ token });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error });
  }
});

// User registration
app.post('/register', async (req, res) => {
  const { userName, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ userName, password: hashedPassword });
    await newUser.save();
    res.json({ message: 'User registered' });
  } catch (error) {
    res.status(500).json({ message: 'Error during registration', error });
  }
});

// Get all employees
app.get('/employees', auth, async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error });
  }
});

// Create a new employee
app.post('/employees', [auth, upload.single('image')], async (req, res) => {
  try {
    const { name, email, mobile, designation, gender, course } = req.body;
    const image = req.file ? req.file.path : '';
    const newEmployee = new Employee({ name, email, mobile, designation, gender, course, image });
    await newEmployee.save();
    res.status(201).json({ message: 'Employee created', employee: newEmployee });
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ message: 'Error creating employee', error: error.message });
  }
});

// Update an employee
app.put('/employees/:id', [auth, upload.single('image')], async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, mobile, designation, gender, course } = req.body;
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

// Delete an employee
app.delete('/employees/:id', auth, async (req, res) => {
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

// Employee routes
app.use('/employees', employeeRoutes);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Handle all other routes by sending the React index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
