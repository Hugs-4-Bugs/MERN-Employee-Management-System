import React, { useState } from 'react';
import axios from 'axios';

const CreateEmployee = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: [],
    image: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });
    await axios.post('http://localhost:5000/employees', formData, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
        'Content-Type': 'multipart/form-data',
      },
    });
    window.location.href = '/dashboard';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="mobile" placeholder="Mobile No" onChange={handleChange} required />
      <select name="designation" onChange={handleChange} required>
        <option value="">Select Designation</option>
        <option value="HR">HR</option>
        <option value="Manager">Manager</option>
        <option value="Sales">Sales</option>
      </select>
      <input type="radio" name="gender" value="M" onChange={handleChange} required /> Male
      <input type="radio" name="gender" value="F" onChange={handleChange} required /> Female
      <input type="checkbox" name="course" value="MCA" onChange={handleChange} /> MCA
      <input type="checkbox" name="course" value="BCA" onChange={handleChange} /> BCA
      <input type="checkbox" name="course" value="BSC" onChange={handleChange} /> BSC
      <input type="file" name="image" onChange={handleFileChange} accept="image/jpeg,image/png" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateEmployee;
