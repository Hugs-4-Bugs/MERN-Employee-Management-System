// // src/components/Dashboard.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import EmployeeForm from './EmployeeForm';
// import EmployeeList from './EmployeeList';

// const Dashboard = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredEmployees, setFilteredEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5005/employees', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setEmployees(response.data);
//         setFilteredEmployees(response.data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };
//     fetchEmployees();
//   }, []);

//   useEffect(() => {
//     if (searchTerm) {
//       const filtered = employees.filter((employee) =>
//         employee.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredEmployees(filtered);
//     } else {
//       setFilteredEmployees(employees);
//     }
//   }, [searchTerm, employees]);

//   const handleUpdate = (employee) => {
//     setSelectedEmployee(employee);
//   };

//   const handleClear = () => {
//     setSelectedEmployee(null);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Employee Dashboard</h2>

//       {/* Search Bar */}
//       <div>
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//       </div>

//       {/* Employee Form */}
//       <EmployeeForm
//         selectedEmployee={selectedEmployee}
//         onClear={handleClear}
//         onEmployeeChange={setEmployees} // Assuming EmployeeForm updates employees
//       />

//       {/* Employee List */}
//       <EmployeeList
//         employees={filteredEmployees}
//         onUpdate={handleUpdate}
//         onEmployeeChange={setEmployees} // Assuming EmployeeList updates employees
//       />
//     </div>
//   );
// };

// export default Dashboard;

























// import React, { useEffect, useState } from 'react';

// const Dashboard = () => {
//     const [employees, setEmployees] = useState([]);

//     useEffect(() => {
//         const fetchEmployees = async () => {
//             const token = localStorage.getItem('token');
//             try {
//                 const response = await fetch('http://localhost:5005/employees', {
//                     headers: { 'Authorization': `Bearer ${token}` },
//                 });
//                 const data = await response.json();
//                 setEmployees(data);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchEmployees();
//     }, []);

//     return (
//         <div>
//             <h2>Employee List</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Mobile No</th>
//                         <th>Designation</th>
//                         <th>Gender</th>
//                         <th>Course</th>
//                         <th>Image</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {employees.map(emp => (
//                         <tr key={emp._id}>
//                             <td>{emp.name}</td>
//                             <td>{emp.email}</td>
//                             <td>{emp.mobile}</td>
//                             <td>{emp.designation}</td>
//                             <td>{emp.gender}</td>
//                             <td>{emp.course}</td>
//                             <td><img src={`http://localhost:5005/${emp.image}`} alt="Employee" width="100" /></td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Dashboard;

























import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Dashboard.css'; // Assuming you have CSS for styling

const Dashboard = () => {
  const userName = localStorage.getItem('user');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="dashboard">
      <div className="header">
        <div className="nav">
          <Link to="/dashboard">Home</Link>
          <Link to="/employee-list">EmployeeList</Link>
        </div>
        <div className="user-info">
          {userName} <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="content">
        <h2>Welcome to Admin Panel</h2>
        {/* <p>Note: Test to be created in MERN for the panel while for API's you need to either use API's built on Node</p> */}
        {/* <p>Validation Required: Validate all input fields, check login credentials, manage the username on the dashboard using local storage or cookies.</p> */}
      </div>
    </div>
  );
};

export default Dashboard;























// // src/components/Dashboard.js
// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <p>This is the Dashboard page.</p>
//     </div>
//   );
// };

// export default Dashboard;
