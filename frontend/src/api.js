import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5005', // Update to match your backend port
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
});

export default instance;
