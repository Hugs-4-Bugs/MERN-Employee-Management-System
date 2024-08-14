import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'; // Ensure this path is correct

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <Link to="/dashboard">Home</Link>
      <Link to="/employee-list">Employee List</Link>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
