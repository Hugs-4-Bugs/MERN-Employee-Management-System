// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import './styles/Register.css';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/register', { userName, password });
      alert('Registration successful');
      window.location.href = '/login';
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;



















// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './styles/Register.css'; // Ensure this path is correct

// const API_URL = 'http://localhost:5005'; // Backend URL

// const Register = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${API_URL}/register`, { username, password, email });
//       onLogin();
//       navigate('/login');
//     } catch (error) {
//       console.error('Error registering:', error);
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Register</button>
//         <p>
//           Already registered? <a href="/login">Click here to login</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;
