// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api'; // Import the Axios instance

// const Login = () => {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Use the useNavigate hook

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post('/login', { userName, password });
//       localStorage.setItem('token', response.data.token);
//       navigate('/dashboard'); // Redirect to the dashboard after login
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           placeholder="Username"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;































import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/Login.css';

const API_URL = 'http://localhost:5005'; // Backend URL

const Login = ({ onLogin }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { userName, password });
      localStorage.setItem('token', response.data.token);
      onLogin(); // Notify parent about successful login
      navigate('/create-employee'); // Redirect to CreateEmployee page
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
























// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './styles/Login.css'; // Ensure this path is correct

// const API_URL = 'http://localhost:5005'; // Backend URL

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${API_URL}/login`, { username, password });
//       localStorage.setItem('token', response.data.token);
//       onLogin();
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
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
//         <button type="submit">Login</button>
//         <p>
//           New User? <a href="/register">Register</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
