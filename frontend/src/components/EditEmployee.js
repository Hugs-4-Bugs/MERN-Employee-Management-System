// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EditEmployee = ({ match }) => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     designation: '',
//     gender: '',
//     course: [],
//     image: null,
//   });

//   useEffect(() => {
//     // Fetch employee details by ID
//     const fetchEmployee = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/employees/${match.params.id}`, {
//           headers: {
//             'x-auth-token': localStorage.getItem('token'),
//           },
//         });
//         setForm(response.data);
//       } catch (error) {
//         console.error('Error fetching employee:', error);
//       }
//     };

//     fetchEmployee();
//   }, [match.params.id]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setForm((prevForm) => ({
//         ...prevForm,
//         course: checked
//           ? [...prevForm.course, value]
//           : prevForm.course.filter((c) => c !== value),
//       }));
//     } else {
//       setForm({
//         ...form,
//         [name]: value,
//       });
//     }
//   };

//   const handleFileChange = (e) => {
//     setForm({
//       ...form,
//       image: e.target.files[0],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(form).forEach((key) => {
//       if (Array.isArray(form[key])) {
//         form[key].forEach((item) => formData.append(key, item));
//       } else {
//         formData.append(key, form[key]);
//       }
//     });

//     try {
//       await axios.put(`http://localhost:5000/employees/${match.params.id}`, formData, {
//         headers: {
//           'x-auth-token': localStorage.getItem('token'),
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Employee updated successfully');
//       window.location.href = '/dashboard'; // Redirect or update UI as needed
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/employees/${match.params.id}`, {
//         headers: {
//           'x-auth-token': localStorage.getItem('token'),
//         },
//       });
//       console.log('Employee deleted successfully');
//       window.location.href = '/dashboard'; // Redirect to dashboard or update UI as needed
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Edit Employee</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           placeholder="Name"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           placeholder="Email"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="mobile"
//           value={form.mobile}
//           placeholder="Mobile No"
//           onChange={handleChange}
//           required
//         />
//         <select name="designation" value={form.designation} onChange={handleChange} required>
//           <option value="">Select Designation</option>
//           <option value="HR">HR</option>
//           <option value="Manager">Manager</option>
//           <option value="Sales">Sales</option>
//         </select>
//         <input
//           type="radio"
//           name="gender"
//           value="M"
//           checked={form.gender === 'M'}
//           onChange={handleChange}
//           required
//         /> Male
//         <input
//           type="radio"
//           name="gender"
//           value="F"
//           checked={form.gender === 'F'}
//           onChange={handleChange}
//           required
//         /> Female
//         <input
//           type="checkbox"
//           name="course"
//           value="MCA"
//           checked={form.course.includes('MCA')}
//           onChange={handleChange}
//         /> MCA
//         <input
//           type="checkbox"
//           name="course"
//           value="BCA"
//           checked={form.course.includes('BCA')}
//           onChange={handleChange}
//         /> BCA
//         <input
//           type="checkbox"
//           name="course"
//           value="BSC"
//           checked={form.course.includes('BSC')}
//           onChange={handleChange}
//         /> BSC
//         <input
//           type="file"
//           name="image"
//           onChange={handleFileChange}
//           accept="image/jpeg,image/png"
//         />
//         <button type="submit">Update</button>
//       </form>
//       <button onClick={handleDelete} style={{ marginTop: '10px', backgroundColor: 'red', color: 'white' }}>
//         Delete Employee
//       </button>
//     </div>
//   );
// };

// export default EditEmployee;




















// import React, { useState, useEffect } from 'react';
// import api from '../api'; // Import the Axios instance
// import { useNavigate, useParams } from 'react-router-dom';

// const EditEmployee = () => {
//   const [employee, setEmployee] = useState({});
//   const [image, setImage] = useState(null);
//   const navigate = useNavigate(); // For navigation
//   const { id } = useParams(); // Get the employee ID from URL

//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const response = await api.get(`/employees/${id}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setEmployee(response.data);
//       } catch (error) {
//         console.error('Error fetching employee:', error);
//       }
//     };
//     fetchEmployee();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', employee.name);
//     formData.append('email', employee.email);
//     formData.append('mobile', employee.mobile);
//     formData.append('designation', employee.designation);
//     formData.append('gender', employee.gender);
//     formData.append('course', employee.course);
//     if (image) formData.append('image', image);

//     try {
//       await api.put(`/employees/${id}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       navigate('/dashboard'); // Redirect to dashboard after updating the employee
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Edit Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={employee.name || ''}
//           onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
//           placeholder="Name"
//           required
//         />
//         <input
//           type="email"
//           value={employee.email || ''}
//           onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="text"
//           value={employee.mobile || ''}
//           onChange={(e) => setEmployee({ ...employee, mobile: e.target.value })}
//           placeholder="Mobile"
//           required
//         />
//         <input
//           type="text"
//           value={employee.designation || ''}
//           onChange={(e) => setEmployee({ ...employee, designation: e.target.value })}
//           placeholder="Designation"
//           required
//         />
//         <select
//           value={employee.gender || 'Male'}
//           onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
//         >
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//         <input
//           type="text"
//           value={employee.course || ''}
//           onChange={(e) => setEmployee({ ...employee, course: e.target.value })}
//           placeholder="Course"
//           required
//         />
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//         />
//         <button type="submit">Update Employee</button>
//       </form>
//     </div>
//   );
// };

// export default EditEmployee;


























import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/EditEmployee.css'; // Assuming you have CSS for styling

const EditEmployee = () => {
  const [employee, setEmployee] = useState({
    name: 'Prabhat Kumar',
    email: 'hcgupta@cstech.in',
    mobile: '954010044',
    designation: 'HR',
    gender: 'M',
    course: ['MCA'],
    image: null,
  });

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    // Add update logic here
    console.log('Updated Employee data:', employee);
    navigate('/employee-list');
  };

  return (
    <div className="edit-employee">
      <div className="header">
        <div className="nav">
          <Link to="/dashboard">Home</Link>
          <Link to="/employee-list">EmployeeList</Link>
        </div>
        <div className="user-info">
          Suruchi Sharma <button onClick={() => navigate('/')}>Logout</button>
        </div>
      </div>
      <form onSubmit={handleUpdate}>
        <h2>Edit Employee</h2>
        <div>
          <input
            type="text"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            placeholder="Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            value={employee.email}
            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={employee.mobile}
            onChange={(e) => setEmployee({ ...employee, mobile: e.target.value })}
            placeholder="Mobile No"
            required
          />
        </div>
        <div>
          <select
            value={employee.designation}
            onChange={(e) => setEmployee({ ...employee, designation: e.target.value })}
            required
          >
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
            <option value="Developer">Developer</option>
          </select>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="M"
              checked={employee.gender === 'M'}
              onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="F"
              checked={employee.gender === 'F'}
              onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
            />
            Female
          </label>
        </div>
        <div>
          <input
            type="file"
            onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditEmployee;






























// // src/components/EditEmployee.js
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './styles/EditEmployee.css';

// const EditEmployee = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [employeeData, setEmployeeData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     designation: '',
//     gender: '',
//     course: [],
//     image: null,
//   });

//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5005/employees/${id}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setEmployeeData(response.data);
//       } catch (error) {
//         console.error('Error fetching employee data:', error);
//       }
//     };

//     fetchEmployee();
//   }, [id]);

//   const handleChange = (e) => {
//     setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setEmployeeData({ ...employeeData, image: e.target.files[0] });
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(employeeData).forEach(key => formData.append(key, employeeData[key]));

//     try {
//       await axios.put(`http://localhost:5005/employees/${id}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       alert('Employee updated successfully!');
//       navigate('/employee-list');
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };

//   return (
//     <div className="edit-employee-container">
//       <h2>Edit Employee</h2>
//       <form onSubmit={handleUpdate}>
//         <input
//           type="text"
//           name="name"
//           value={employeeData.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={employeeData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="text"
//           name="mobile"
//           value={employeeData.mobile}
//           onChange={handleChange}
//           placeholder="Mobile No"
//           required
//         />
//         <select
//           name="designation"
//           value={employeeData.designation}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Designation</option>
//           <option value="HR">HR</option>
//           <option value="Manager">Manager</option>
//           <option value="Sales">Sales</option>
//           <option value="Developer">Developer</option>
//         </select>
//         <div>
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Male"
//               checked={employeeData.gender === 'Male'}
//               onChange={handleChange}
//             />
//             Male
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Female"
//               checked={employeeData.gender === 'Female'}
//               onChange={handleChange}
//             />
//             Female
//           </label>
//         </div>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               name="course"
//               value="MCA"
//               checked={employeeData.course.includes('MCA')}
//               onChange={(e) => {
//                 if (e.target.checked) {
//                   setEmployeeData({ ...employeeData, course: [...employeeData.course, 'MCA'] });
//                 } else {
//                   setEmployeeData({ ...employeeData, course: employeeData.course.filter(course => course !== 'MCA') });
//                 }
//               }}
//             />
//             MCA
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="course"
//               value="BCA"
//               checked={employeeData.course.includes('BCA')}
//               onChange={(e) => {
//                 if (e.target.checked) {
//                   setEmployeeData({ ...employeeData, course: [...employeeData.course, 'BCA'] });
//                 } else {
//                   setEmployeeData({ ...employeeData, course: employeeData.course.filter(course => course !== 'BCA') });
//                 }
//               }}
//             />
//             BCA
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="course"
//               value="BSC"
//               checked={employeeData.course.includes('BSC')}
//               onChange={(e) => {
//                 if (e.target.checked) {
//                   setEmployeeData({ ...employeeData, course: [...employeeData.course, 'BSC'] });
//                 } else {
//                   setEmployeeData({ ...employeeData, course: employeeData.course.filter(course => course !== 'BSC') });
//                 }
//               }}
//             />
//             BSC
//           </label>
//         </div>
//         <input type="file" name="image" onChange={handleFileChange} />
//         <button type="submit">Update Employee</button>
//       </form>
//     </div>
//   );
// };

// export default EditEmployee;
