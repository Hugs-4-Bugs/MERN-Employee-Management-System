require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const User = require('./models/User');
const Employee = require('./models/Employee');
const auth = require('./middleware/auth');
const upload = require('./middleware/upload');

app.post('/login', async (req, res) => {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
  }
});

app.post('/register', async (req, res) => {
  const { userName, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ userName, password: hashedPassword });
  await newUser.save();
  res.json({ message: 'User registered' });
});

app.get('/employees', auth, async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error });
  }
});


app.get('/test', auth, (req, res) => {
  res.send('Authorization successful');
});

app.post('/employees', [auth, upload], async (req, res) => {
  const { name, email, mobile, designation, gender, course } = req.body;
  if (!email || !name) {
    return res.status(400).json({ message: 'Email and name are required' });
  }
  const image = req.file ? req.file.path : '';
  const newEmployee = new Employee({ name, email, mobile, designation, gender, course, image });
  try {
    await newEmployee.save();
    res.json({ message: 'Employee created' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating employee', error });
  }
});



app.put('/employees/:id', auth, async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Employee updated' });
});

app.delete('/employees/:id', auth, async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
