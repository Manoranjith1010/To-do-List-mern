# MERN Todo List App

A full-stack todo application built with MongoDB, Express.js, React, and Node.js.

## Project Structure

```
├── backend/
│   ├── models/
│   │   └── Todo.js          # Mongoose Todo schema
│   ├── routes/
│   │   └── todoRoutes.js    # Todo API endpoints
│   ├── server.js            # Express server
│   ├── package.json
│   └── .env                 # Environment variables
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── TodoForm.jsx     # Form to add todos
    │   │   └── TodoList.jsx     # Display todos
    │   ├── App.jsx              # Main app component
    │   ├── main.jsx             # React entry point
    │   ├── index.css            # Global styles
    │   └── App.css              # App styles
    ├── index.html               # HTML template
    ├── vite.config.js           # Vite configuration
    └── package.json
```

## Features

- ✅ Add a task
- ✅ View all tasks
- ✅ Edit a task (mark as completed)
- ✅ Delete a task
- ✅ Store tasks in MongoDB

## Prerequisites

- Node.js and npm installed
- MongoDB running locally or a MongoDB Atlas connection string

## Setup Instructions

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (if not already created):
   ```env
   MONGODB_URI=mongodb://localhost:27017/todo-app
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   # or for development with auto-reload:
   npm run dev
   ```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will open at `http://localhost:3000`

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React, Vite, Axios
- **Styling**: CSS

## Development Notes

- Make sure MongoDB is running before starting the backend
- CORS is enabled to allow frontend-backend communication
- The frontend communicates with the backend via `http://localhost:5000/api/todos`

## License

ISC