import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeForm = ({ employee, onSuccess }) => {
  const [name, setName] = useState(employee ? employee.name : '');
  const [email, setEmail] = useState(employee ? employee.email : '');
  const [mobile, setMobile] = useState(employee ? employee.mobile : '');
  const [designation, setDesignation] = useState(employee ? employee.designation : '');
  const [gender, setGender] = useState(employee ? employee.gender : '');
  const [course, setCourse] = useState(employee ? employee.course : '');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setEmail(employee.email);
      setMobile(employee.mobile);
      setDesignation(employee.designation);
      setGender(employee.gender);
      setCourse(employee.course);
    }
  }, [employee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('designation', designation);
    formData.append('gender', gender);
    formData.append('course', course);
    if (image) formData.append('image', image);

    try {
      if (employee) {
        await axios.put(`/employees/${employee._id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
      } else {
        await axios.post('/employees', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
      }
      onSuccess();
    } catch (err) {
      console.error(err);
      setError('An error occurred while saving the employee data.');
    }
  };

  return (
    <div>
      <h2>{employee ? 'Update Employee' : 'Add Employee'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>Mobile:
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </label>
        <br />
        <label>Designation:
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          />
        </label>
        <br />
        <label>Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <br />
        <label>Course:
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </label>
        <br />
        <label>Image:
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {image && <p>Selected file: {image.name}</p>}
        </label>
        <br />
        <button type="submit">{employee ? 'Update' : 'Add'} Employee</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default EmployeeForm;











// // src/components/EmployeeForm.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EmployeeForm = ({ selectedEmployee, onClear }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [gender, setGender] = useState('');
//   const [course, setCourse] = useState('');
//   const [image, setImage] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     if (selectedEmployee) {
//       setName(selectedEmployee.name);
//       setEmail(selectedEmployee.email);
//       setMobile(selectedEmployee.mobile);
//       setDesignation(selectedEmployee.designation);
//       setGender(selectedEmployee.gender);
//       setCourse(selectedEmployee.course);
//       setImage(selectedEmployee.image);
//       setIsEditing(true);
//     } else {
//       setName('');
//       setEmail('');
//       setMobile('');
//       setDesignation('');
//       setGender('');
//       setCourse('');
//       setImage(null);
//       setIsEditing(false);
//     }
//   }, [selectedEmployee]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('mobile', mobile);
//     formData.append('designation', designation);
//     formData.append('gender', gender);
//     formData.append('course', course);
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       if (isEditing) {
//         await axios.put(`http://localhost:5005/employees/${selectedEmployee._id}`, formData, {
//           headers: { 
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//       } else {
//         await axios.post('http://localhost:5005/employees', formData, {
//           headers: { 
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//       }
//       onClear(); // Clear the form after submission
//     } catch (error) {
//       console.error('Error submitting employee data:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>{isEditing ? 'Edit Employee' : 'Create Employee'}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </label>
//         <br />
//         <label>Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </label>
//         <br />
//         <label>Mobile No:
//           <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
//         </label>
//         <br />
//         <label>Designation:
//           <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
//         </label>
//         <br />
//         <label>Gender:
//           <select value={gender} onChange={(e) => setGender(e.target.value)} required>
//             <option value="M">Male</option>
//             <option value="F">Female</option>
//           </select>
//         </label>
//         <br />
//         <label>Course:
//           <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} required />
//         </label>
//         <br />
//         <label>Image:
//           <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//         </label>
//         <br />
//         <button type="submit">{isEditing ? 'Update Employee' : 'Create Employee'}</button>
//       </form>
//     </div>
//   );
// };

// export default EmployeeForm;
