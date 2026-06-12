# Quick Start Guide

## Prerequisites
- Node.js and npm installed
- MongoDB running (locally or MongoDB Atlas)

## Installation & Running

### 1. Backend Setup
```bash
cd backend
npm install
npm start
```
Backend will be available at: `http://localhost:5000`

### 2. Frontend Setup (in a new terminal)
```bash
cd frontend
npm install
npm run dev
```
Frontend will open at: `http://localhost:3000`

## MongoDB Connection
The app uses MongoDB. Make sure you have:
- **Local MongoDB**: Running on `mongodb://localhost:27017`
- **MongoDB Atlas**: Update the `MONGODB_URI` in `backend/.env`

## Features
- ✅ Add tasks
- ✅ View all tasks
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ Persist data in MongoDB

## Troubleshooting

**Backend won't connect to MongoDB:**
- Ensure MongoDB is running: `mongod` (local) or update connection string to MongoDB Atlas

**CORS errors:**
- Frontend and backend communication is already configured
- Make sure backend is running on port 5000

**Port already in use:**
- Backend: Change PORT in `.env`
- Frontend: Change port in `vite.config.js`

## API Documentation

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all tasks |
| POST | `/api/todos` | Create a new task |
| PUT | `/api/todos/:id` | Update a task |
| DELETE | `/api/todos/:id` | Delete a task |

## File Structure

```
backend/
├── models/Todo.js          # MongoDB schema
├── routes/todoRoutes.js    # API routes
├── server.js               # Express app
└── package.json

frontend/
├── src/
│   ├── App.jsx             # Main component
│   ├── components/
│   │   ├── TodoForm.jsx    # Add task form
│   │   └── TodoList.jsx    # Task list display
│   └── main.jsx            # React entry
└── package.json
```
