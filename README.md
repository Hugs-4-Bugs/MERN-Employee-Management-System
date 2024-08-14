

# MERN Employee Management System

## Project Overview

This project is a MERN stack application for managing employee records. It includes functionality for creating, editing, deleting, and listing employees. The frontend is built with React, and the backend uses Express, Node.js, and MongoDB.

## Project Structure


```
mern-employee-management/
├── backend/
│   ├── middleware/
│   │   ├── auth.js
│   │   └── upload.js
│   ├── models/
│   │   ├── Employee.js
│   │   └── User.js
│   ├── routes/
│   │   ├── employees.js
│   │   └── users.js
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.js
│   │   │   ├── CreateEmployee.js
│   │   │   ├── Dashboard.js
│   │   │   ├── EditEmployee.js
│   │   │   ├── Login.js
│   │   │   ├── NotFound.js
│   │   │   └── Register.js
│   │   ├── App.css
│   │   └── index.js
│   │   └── setupProxy.js
|   |── package.json
├── uploads/
├── .env
├── .gitignore
├── README.md
└── package-lock.json
```

### Backend

- `backend/`: Contains the server-side code.
  - `middleware/`: Middleware functions for authentication and file upload.
    - `auth.js`: Authentication middleware.
    - `upload.js`: File upload middleware.
  - `models/`: Mongoose models for MongoDB collections.
    - `Employee.js`: Schema for employee records.
    - `User.js`: Schema for user authentication.
  - `routes/`: API route handlers.
    - `employees.js`: Routes for employee CRUD operations.
    - `users.js`: Routes for user authentication and management.
  - `server.js`: Main entry point of the backend server.

### Frontend

- `frontend/`: Contains the client-side code.
  - `public/`: Public assets and HTML file.
    - `index.html`: Main HTML file for the React application.
  - `src/`: Source code for the React application.
    - `components/`: React components.
      - `App.js`: Main application component.
      - `CreateEmployee.js`: Form for creating new employees.
      - `Dashboard.js`: Dashboard for listing employees and performing actions.
      - `EditEmployee.js`: Form for editing employee details.
      - `Login.js`: Form for user authentication.
    - `App.css`: CSS styles for the application.
    - `index.js`: Entry point for the React application.
    - `setupProxy.js`: Configuration for proxying API requests to the backend.

### Uploads

- `uploads/`: Directory for storing uploaded files.

## Installation and Setup

### Cloning the Repository

1. Open Terminal on your Mac.
2. Clone the repository:
   ```bash
   git clone https://github.com/Hugs-4-Bugs/mern-employee-management.git
   ```
3. Navigate into the project directory:
   ```bash
   cd mern-employee-management
   ```

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following content:
   ```env
   MONGO_URI=mongodb://localhost:27017/mern-employee-management
   PORT=5002
   JWT_SECRET=your_jwt_secret_here
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Open a new Terminal tab or window.
2. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
3. Install frontend dependencies:
   ```bash
   npm install
   ```
4. Start the React application:
   ```bash
   npm start
   ```

## Running the Application

1. Ensure MongoDB is running on your local machine.
2. Start the backend server by running `npm start` in the `backend` directory.
3. Start the React frontend application by running `npm start` in the `frontend` directory.
4. Open your browser and navigate to `http://localhost:3000` to access the application.

## API Endpoints

- **POST** `/employees`: Create a new employee.
- **PUT** `/employees/:id`: Update an existing employee.
- **DELETE** `/employees/:id`: Delete an employee.
- **GET** `/employees`: List all employees.

## Contributing

Feel free to submit issues or pull requests. Your contributions are welcome!

## License

This project is licensed under the MIT License.

