// backend/routes/users.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key';

// Hardcoded credentials
const hardcodedUser = {
  userName: 'Prabhat',
  password: 'Sharma'
};

router.post('/login', (req, res) => {
  const { userName, password } = req.body;
  if (userName === hardcodedUser.userName && password === hardcodedUser.password) {
    const token = jwt.sign({ userName }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});















// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');

// // Load environment variables from .env file
// dotenv.config();

// const SECRET_KEY = process.env.JWT_SECRET; // Use the secret key from the .env file

// // Hardcoded credentials
// const hardcodedUser = {
//   userName: 'Prabhat',
//   password: 'Sharma'
// };

// router.post('/login', (req, res) => {
//   const { userName, password } = req.body;
//   if (userName === hardcodedUser.userName && password === hardcodedUser.password) {
//     const token = jwt.sign({ userName }, SECRET_KEY, { expiresIn: '1h' });
//     res.json({ token });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// });

// module.exports = router;
