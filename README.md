

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
│   ├── uploads/
|   |   └──  All the uploaded documents/files/images will be stored here uploaded via backend
│   ├── .env
│   └── server.js
├── frontend/
│   ├── build/
│   ├── node_modules/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   |   |   └── styles/
│   │   │   |        ├── App.css
│   │   │   |        ├── CreateEmployee.css
│   │   │   |        ├── Dashboard.css
│   │   │   |        ├── EditEmployee.css
│   │   │   |        ├── Login.css
│   │   │   |        ├── NotFound.css
│   │   │   |        └── Register.css
│   │   │   ├── App.js
│   │   │   ├── CreateEmployee.js
│   │   │   ├── Dashboard.js
│   │   │   ├── EditEmployee.js
│   │   │   ├── Login.js
│   │   │   ├── NotFound.js
│   │   │   └── Register.js
│   │   └── App.js
│   │   └── api.js
│   │   └── index.js
│   │   └── setupProxy.js
|   |── babel.config.js
|   |── package.json
├── uploads/
|   |  └── All the uploaded documents/files/images will be stored here uploaded via frontend
├── .gitignore
├── README.md
└── package-lock.json
```

## Prerequisites

- Node.js
- MongoDB
- npm or yarn


  ### Steps to Generate a Secret Key Using randomkeygen.com:

1. **Visit the Website:**
   Go to [randomkeygen.com](https://randomkeygen.com/).

2. **Select a Key Format:**
   Scroll down to the "Codeigniter Encryption Keys" section or "Base64 Key" section. These keys are typically strong enough for use in web applications.

3. **Copy the Generated Key:**
   Click on the key you want to use, and it will be automatically copied to your clipboard.

4. **Set the Secret Key:**
   Paste this key into your environment configuration as mentioned earlier:

   ```plaintext
   SECRET_KEY=your_generated_secret_key_here
   ```

This method is user-friendly and provides secure, random keys that are ready to be used in your application. Just remember to keep your secret key private and secure.



## Generating a Random Secret Key using Mac Terminal or command prompt

For security purposes, it's important to use a strong, random secret key for your application. This key is used to sign and verify JWT tokens.

### Generating a Secret Key

You can generate a random secret key using various methods. Here are a few options:

1. **Using OpenSSL (Linux/Mac):**

   Open your terminal and run:

   ```bash
   openssl rand -base64 32
   ```

   This command generates a 32-byte random string encoded in base64, which is suitable for use as a secret key.

2. **Using Node.js:**

   If you have Node.js installed, you can generate a secret key with this command in your Node.js REPL or in a script:

   ```javascript
   require('crypto').randomBytes(64).toString('hex');
   ```

   This generates a 64-byte random string in hexadecimal format.

3. **Using an Online Tool:**

   You can also use online tools like [randomkeygen.com](https://randomkeygen.com/) to generate a random secret key.

### Setting the Secret Key

Once you have generated a secret key, add it to your environment variables. If you are using a `.env` file for configuration, it should look like this:

```plaintext
SECRET_KEY=your_generated_secret_key_here
```

Make sure that this file is not included in your version control to keep the key secure.


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



## API Testing

You can test the API using the following `curl` commands.

### 1. Register a New User

```bash
curl -X POST http://localhost:5005/register \
     -H "Content-Type: application/json" \
     -d '{
           "name": "Prabhat Kumar",
           "email": "prabhat@example.com",
           "password": "YourPassword"
         }'
```

### 2. Login User

```bash
curl -X POST http://localhost:5005/login \
     -H "Content-Type: application/json" \
     -d '{
           "email": "prabhat@example.com",
           "password": "YourPassword"
         }'
```

### 3. Create a New Employee

```bash
curl -X POST http://localhost:5005/employees \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -H "Content-Type: multipart/form-data" \
     -F "name=John Doe" \
     -F "email=johndoe@example.com" \
     -F "mobile=9876543210" \
     -F "designation=Software Engineer" \
     -F "gender=M" \
     -F "course=B.Tech" \
     -F "image=@/path/to/your/image.jpg"
```

### 4. Get All Employees

```bash
curl -X GET http://localhost:5005/employees \
     -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### 5. Get a Single Employee by ID

```bash
curl -X GET http://localhost:5005/employees/EMPLOYEE_ID \
     -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### 6. Update an Employee by ID

```bash
curl -X PUT http://localhost:5005/employees/EMPLOYEE_ID \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -H "Content-Type: multipart/form-data" \
     -F "name=Updated Name" \
     -F "email=updatedemail@example.com" \
     -F "mobile=1234567890" \
     -F "designation=Senior Engineer" \
     -F "gender=M" \
     -F "course=M.Tech" \
     -F "image=@/path/to/your/updated_image.jpg"
```

### 7. Delete an Employee by ID

```bash
curl -X DELETE http://localhost:5005/employees/EMPLOYEE_ID \
     -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### 8. Logout User

```bash
curl -X POST http://localhost:5005/logout \
     -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Project Structure

- **backend/**: Contains the Express.js server, routes, models, and controllers.
- **frontend/**: Contains the React.js application.

## Contributing

Feel free to submit issues or pull requests. Your contributions are welcome!

## License

This project is licensed under the MIT License.

