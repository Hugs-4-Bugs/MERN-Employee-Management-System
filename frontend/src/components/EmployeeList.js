// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const EmployeeList = ({ onEdit }) => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('/employees', {
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`
//           }
//         });
//         setEmployees(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/employees/${id}`, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       setEmployees(employees.filter(employee => employee._id !== id));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <h2>Employee List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile</th>
//             <th>Designation</th>
//             <th>Gender</th>
//             <th>Course</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map(employee => (
//             <tr key={employee._id}>
//               <td>{employee.name}</td>
//               <td>{employee.email}</td>
//               <td>{employee.mobile}</td>
//               <td>{employee.designation}</td>
//               <td>{employee.gender}</td>
//               <td>{employee.course}</td>
//               <td>
//                 {employee.image && (
//                   <img
//                     src={`http://localhost:5005/${employee.image}`}
//                     alt={employee.name}
//                     style={{ width: '100px', height: 'auto' }}
//                   />
//                 )}
//               </td>
//               <td>
//                 <button onClick={() => onEdit(employee)}>Edit</button>
//                 <button onClick={() => handleDelete(employee._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeList;















// // src/components/EmployeeList.js
// import React from 'react';
// import axios from 'axios';

// const EmployeeList = ({ employees, onUpdate }) => {
//   const handleDelete = async (id) => {
//     const token = localStorage.getItem('token');
//     try {
//       await axios.delete(`http://localhost:5005/employees/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       window.location.reload(); // Refresh the list after deletion
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Employee List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile No</th>
//             <th>Designation</th>
//             <th>Gender</th>
//             <th>Course</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map(employee => (
//             <tr key={employee._id}>
//               <td>{employee.name}</td>
//               <td>{employee.email}</td>
//               <td>{employee.mobile}</td>
//               <td>{employee.designation}</td>
//               <td>{employee.gender}</td>
//               <td>{employee.course}</td>
//               <td>
//                 {employee.image && <img src={`http://localhost:5005/${employee.image}`} alt="Employee" style={{ width: '50px' }} />}
//               </td>
//               <td>
//                 <button onClick={() => onUpdate(employee)}>Edit</button>
//                 <button onClick={() => handleDelete(employee._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeList;



























// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './EmployeeList.css'; // Assuming you have CSS for styling

// const EmployeeList = () => {
//   const navigate = useNavigate();
//   const employees = [
//     // Example data
//     { id: 1, name: 'John Doe', email: 'john@example.com', mobile: '1234567890', designation: 'HR', gender: 'M', course: 'MCA', createdate: '2024-01-01' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: '0987654321', designation: 'Manager', gender: 'F', course: 'BCA', createdate: '2024-01-02' },
//     // Add more employees here
//   ];

//   return (
//     <div className="employee-list">
//       <div className="header">
//         <div className="nav">
//           <Link to="/dashboard">Home</Link>
//           <Link to="/employee-list">EmployeeList</Link>
//         </div>
//         <div className="user-info">
//           Suruchi Sharma <button onClick={() => navigate('/')}>Logout</button>
//         </div>
//       </div>
//       <div className="content">
//         <h2>Employee List</h2>
//         <button onClick={() => navigate('/create-employee')}>Create Employee</button>
//         <input type="text" placeholder="Search" />
//         <table>
//           <thead>
//             <tr>
//               <th>UniqueId</th>
//               <th>Image</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Mobile No</th>
//               <th>Designation</th>
//               <th>Gender</th>
//               <th>Course</th>
//               <th>Createdate</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map(emp => (
//               <tr key={emp.id}>
//                 <td>{emp.id}</td>
//                 <td><img src="path/to/image" alt="Employee" /></td>
//                 <td>{emp.name}</td>
//                 <td>{emp.email}</td>
//                 <td>{emp.mobile}</td>
//                 <td>{emp.designation}</td>
//                 <td>{emp.gender}</td>
//                 <td>{emp.course}</td>
//                 <td>{emp.createdate}</td>
//                 <td>
//                   <button onClick={() => navigate(`/edit-employee/${emp.id}`)}>Edit</button>
//                   <button>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EmployeeList;































// src/components/EmployeeList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles/EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5005/employees', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleDeleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:5005/employees/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setEmployees(employees.filter(emp => emp._id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      <Link to="/create-employee" className="employee-list-button">Create Employee</Link>
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>
            <span>{emp.name} - {emp.email}</span>
            <button onClick={() => handleDeleteEmployee(emp._id)}>Delete</button>
            <Link to={`/edit-employee/${emp._id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;

























// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './styles/EmployeeList.css';

// const EmployeeList = ({ employees, onUpdateEmployee, onDeleteEmployee }) => {
//   const [employeeList, setEmployeeList] = useState(employees || []);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('http://localhost:5005/employees', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setEmployeeList(response.data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };

//     if (!employees) {
//       fetchEmployees();
//     }
//   }, [employees]);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5005/employees/${id}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       onDeleteEmployee(id);
//       setEmployeeList(employeeList.filter((employee) => employee._id !== id));
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   return (
//     <div className="employee-list-container">
//       <h2>Employee List</h2>
//       <Link to="/create-employee">
//         <button className="create-employee-btn">Create Employee</button>
//       </Link>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile</th>
//             <th>Designation</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employeeList.map((employee) => (
//             <tr key={employee._id}>
//               <td>{employee.name}</td>
//               <td>{employee.email}</td>
//               <td>{employee.mobile}</td>
//               <td>{employee.designation}</td>
//               <td>
//                 <Link to={`/edit-employee/${employee._id}`}>
//                   <button>Edit</button>
//                 </Link>
//                 <button onClick={() => handleDelete(employee._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeList;
