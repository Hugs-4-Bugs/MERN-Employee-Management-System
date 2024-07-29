import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await axios.get('http://localhost:5000/employees', {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setEmployees(response.data);
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Welcome Admin Panel</h2>
      <button onClick={() => (window.location.href = '/create-employee')}>
        Create Employee
      </button>
      <table>
        <thead>
          <tr>
            <th>Unique Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Create Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee._id}</td>
              <td><img src={employee.image} alt="profile" width="50" /></td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile}</td>
              <td>{employee.designation}</td>
              <td>{employee.gender}</td>
              <td>{employee.course.join(', ')}</td>
              <td>{new Date(employee.createDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => (window.location.href = `/edit-employee/${employee._id}`)}>
                  Edit
                </button>
                <button
                  onClick={async () => {
                    await axios.delete(`http://localhost:5000/employees/${employee._id}`, {
                      headers: { 'x-auth-token': localStorage.getItem('token') }
                    });
                    setEmployees(employees.filter((emp) => emp._id !== employee._id));
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
