Here's a comprehensive README file for your MERN stack employee management system project. This README includes instructions for setting up, installing dependencies, and running the project on a Mac terminal.

---

# MERN Employee Management System

## Overview

This is a MERN stack application for managing employee data. It provides functionality to create, read, update, and delete employee records. The application is built using MongoDB, Express, React, and Node.js.

## Features

- User authentication with JWT
- CRUD operations for employee data
- File upload support for employee images

## Prerequisites

- **Node.js**: Ensure Node.js is installed. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Ensure MongoDB is installed and running. Follow the installation guide on [mongodb.com](https://www.mongodb.com/try/download/community) if necessary.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Hugs-4-Bugs/mern-employee-management.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd mern-employee-management/backend
   ```

3. **Install Backend Dependencies**

   ```bash
   npm install
   ```

4. **Install Frontend Dependencies**

   Navigate to the `frontend` directory (if it exists) and install dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

## Configuration

1. **Create a `.env` File**

   In the `backend` directory, create a `.env` file and add the following environment variables:

   ```env
   MONGO_URI=mongodb://localhost:27017/mern-employee-management
   PORT=5002
   JWT_SECRET=your_jwt_secret_key
   ```

   Replace `your_jwt_secret_key` with a secure key of your choice.

## Running the Project

1. **Start the Backend Server**

   Ensure you are in the `backend` directory and run:

   ```bash
   npm start
   ```

   This will start the server on `http://localhost:5002`.

2. **Start the Frontend Server**

   Navigate to the `frontend` directory and run:

   ```bash
   npm start
   ```

   This will start the React development server on `http://localhost:3000` (or the port specified in your `frontend` configuration).

## API Endpoints

- **POST** `/login`: Authenticate a user and receive a JWT token.
- **POST** `/register`: Register a new user.
- **GET** `/employees`: Get a list of all employees (requires authentication).
- **POST** `/employees`: Create a new employee record (requires authentication).
- **PUT** `/employees/:id`: Update an existing employee record (requires authentication).
- **DELETE** `/employees/:id`: Delete an employee record (requires authentication).

## Troubleshooting

- **MongooseError: The `uri` parameter to `openUri()` must be a string**: Ensure the `MONGO_URI` in your `.env` file is correctly set.
- **Address already in use**: Check if another instance of the server is running on the same port.

## Contributing

Feel free to submit issues, create pull requests, or contribute in any other way. For more details, refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
