// frontend/src/components/EditEmployee.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: [],
    image: null,
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await axios.get(`http://localhost:5000/employees/${id}`, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      const { name, email, mobile, designation, gender, course, image } = response.data;
      setForm({ name, email, mobile, designation, gender, course, image });
    };
    fetchEmployee();
  }, [id]);

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
    await axios.put(`http://localhost:5000/employees/${id}`, formData, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
        'Content-Type': 'multipart/form-data',
      },
    });
    window.location.href = '/dashboard';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input type="text" name="mobile" placeholder="Mobile No" value={form.mobile} onChange={handleChange} required />
      <select name="designation" value={form.designation} onChange={handleChange} required>
        <option value="">Select Designation</option>
        <option value="HR">HR</option>
        <option value="Manager">Manager</option>
        <option value="Sales">Sales</option>
      </select>
      <input type="radio" name="gender" value="M" checked={form.gender === 'M'} onChange={handleChange} required /> Male
      <input type="radio" name="gender" value="F" checked={form.gender === 'F'} onChange={handleChange} required /> Female
      <input type="checkbox" name="course" value="MCA" checked={form.course.includes('MCA')} onChange={handleChange} /> MCA
      <input type="checkbox" name="course" value="BCA" checked={form.course.includes('BCA')} onChange={handleChange} /> BCA
      <input type="checkbox" name="course" value="BSC" checked={form.course.includes('BSC')} onChange={handleChange} /> BSC
      <input type="file" name="image" onChange={handleFileChange} accept="image/jpeg,image/png" />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditEmployee;
