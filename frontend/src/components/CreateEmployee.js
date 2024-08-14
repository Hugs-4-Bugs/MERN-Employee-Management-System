// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateEmployee = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     designation: '',
//     gender: '',
//     course: [],
//     image: null,
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
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
//       formData.append(key, form[key]);
//     });
//     await axios.post('http://localhost:5000/employees', formData, {
//       headers: {
//         'x-auth-token': localStorage.getItem('token'),
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     window.location.href = '/dashboard';
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
//       <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//       <input type="text" name="mobile" placeholder="Mobile No" onChange={handleChange} required />
//       <select name="designation" onChange={handleChange} required>
//         <option value="">Select Designation</option>
//         <option value="HR">HR</option>
//         <option value="Manager">Manager</option>
//         <option value="Sales">Sales</option>
//       </select>
//       <input type="radio" name="gender" value="M" onChange={handleChange} required /> Male
//       <input type="radio" name="gender" value="F" onChange={handleChange} required /> Female
//       <input type="checkbox" name="course" value="MCA" onChange={handleChange} /> MCA
//       <input type="checkbox" name="course" value="BCA" onChange={handleChange} /> BCA
//       <input type="checkbox" name="course" value="BSC" onChange={handleChange} /> BSC
//       <input type="file" name="image" onChange={handleFileChange} accept="image/jpeg,image/png" required />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default CreateEmployee;





























// import React, { useState } from 'react';

// const CreateEmployee = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         mobile: '',
//         designation: '',
//         gender: '',
//         course: '',
//         image: null,
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         setFormData({ ...formData, image: e.target.files[0] });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formDataToSend = new FormData();
//         Object.keys(formData).forEach(key => {
//             formDataToSend.append(key, formData[key]);
//         });

//         const token = localStorage.getItem('token');
//         try {
//             const response = await fetch('http://localhost:5005/employees', {
//                 method: 'POST',
//                 headers: { 'Authorization': `Bearer ${token}` },
//                 body: formDataToSend,
//             });
//             const data = await response.json();
//             if (data.employee) {
//                 alert('Employee created');
//             } else {
//                 alert('Error creating employee');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Create Employee</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="mobile"
//                     placeholder="Mobile No"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="designation"
//                     placeholder="Designation"
//                     value={formData.designation}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="radio"
//                     name="gender"
//                     value="M"
//                     checked={formData.gender === 'M'}
//                     onChange={handleChange}
//                 /> Male
//                 <input
//                     type="radio"
//                     name="gender"
//                     value="F"
//                     checked={formData.gender === 'F'}
//                     onChange={handleChange}
//                 /> Female
//                 <input
//                     type="checkbox"
//                     name="course"
//                     value="MCA"
//                     checked={formData.course === 'MCA'}
//                     onChange={handleChange}
//                 /> MCA
//                 <input
//                     type="checkbox"
//                     name="course"
//                     value="BCA"
//                     checked={formData.course === 'BCA'}
//                     onChange={handleChange}
//                 /> BCA
//                 <input
//                     type="checkbox"
//                     name="course"
//                     value="BSC"
//                     checked={formData.course === 'BSC'}
//                     onChange={handleChange}
//                 /> BSC
//                 <input
//                     type="file"
//                     name="image"
//                     onChange={handleFileChange}
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default CreateEmployee;





























// import React, { useState } from 'react';

// const CreateEmployee = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     designation: '',
//     gender: '',
//     course: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();
//     Object.keys(formData).forEach(key => {
//       formDataToSend.append(key, formData[key]);
//     });

//     const token = localStorage.getItem('token');
//     try {
//       const response = await fetch('http://localhost:5005/employees', {
//         method: 'POST',
//         headers: { 'Authorization': `Bearer ${token}` },
//         body: formDataToSend,
//       });
//       const data = await response.json();
//       if (data.employee) {
//         alert('Employee created');
//       } else {
//         alert('Error creating employee');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile No"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="designation"
//           placeholder="Designation"
//           value={formData.designation}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="radio"
//           name="gender"
//           value="M"
//           checked={formData.gender === 'M'}
//           onChange={handleChange}
//         /> Male
//         <input
//           type="radio"
//           name="gender"
//           value="F"
//           checked={formData.gender === 'F'}
//           onChange={handleChange}
//         /> Female
//         <input
//           type="checkbox"
//           name="course"
//           value="MCA"
//           checked={formData.course === 'MCA'}
//           onChange={handleChange}
//         /> MCA
//         <input
//           type="checkbox"
//           name="course"
//           value="BCA"
//           checked={formData.course === 'BCA'}
//           onChange={handleChange}
//         /> BCA
//         <input
//           type="checkbox"
//           name="course"
//           value="BSC"
//           checked={formData.course === 'BSC'}
//           onChange={handleChange}
//         /> BSC
//         <input
//           type="file"
//           name="image"
//           onChange={handleFileChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateEmployee;



































import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/CreateEmployee.css'; // Assuming you have CSS for styling

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: 'HR',
    gender: 'M',
    course: [],
    image: null,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and submit logic here
    console.log('Employee data:', employee);
    navigate('/employee-list');
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setEmployee((prevState) => ({
        ...prevState,
        course: [...prevState.course, value],
      }));
    } else {
      setEmployee((prevState) => ({
        ...prevState,
        course: prevState.course.filter((course) => course !== value),
      }));
    }
  };

  return (
    <div className="create-employee">
      <div className="header">
        <div className="nav">
          <Link to="/dashboard">Home</Link>
          <Link to="/employee-list">EmployeeList</Link>
        </div>
        <div className="user-info">
          Suruchi Sharma <button onClick={() => navigate('/')}>Logout</button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Create Employee</h2>
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
          <label>
            <input
              type="checkbox"
              value="MCA"
              checked={employee.course.includes('MCA')}
              onChange={handleCheckboxChange}
            />
            MCA
          </label>
          <label>
            <input
              type="checkbox"
              value="BCA"
              checked={employee.course.includes('BCA')}
              onChange={handleCheckboxChange}
            />
            BCA
          </label>
          <label>
            <input
              type="checkbox"
              value="BE"
              checked={employee.course.includes('BE')}
              onChange={handleCheckboxChange}
            />
            BE
          </label>
          <label>
            <input
              type="checkbox"
              value="B-Tech"
              checked={employee.course.includes('B-Tech')}
              onChange={handleCheckboxChange}
            />
            B-Tech
          </label>
        </div>
        <div>
          <input
            type="file"
            onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateEmployee;



























// // src/components/CreateEmployee.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './styles/CreateEmployee.css';

// const CreateEmployee = () => {
//   const [employeeData, setEmployeeData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     designation: '',
//     gender: '',
//     course: [],
//     image: null,
//   });

//   const handleChange = (e) => {
//     setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setEmployeeData({ ...employeeData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(employeeData).forEach(key => formData.append(key, employeeData[key]));

//     try {
//       await axios.post('http://localhost:5005/employees', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       alert('Employee created successfully!');
//     } catch (error) {
//       console.error('Error creating employee:', error);
//     }
//   };

//   return (
//     <div className="create-employee-container">
//       <h2>Create Employee</h2>
//       <form onSubmit={handleSubmit}>
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
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateEmployee;
