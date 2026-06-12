import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:5000/api/todos";

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setTodos(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    try {
      const res = await axios.post(API_URL, { title });
      setTodos([...todos, res.data]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const updateTodo = async (id, updates) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, updates);
      setTodos(todos.map(todo => todo._id === id ? res.data : todo));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>📝 Todo App</h1>
      <TodoForm onAdd={addTodo} />
      {loading ? <p>Loading...</p> : <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />}
    </div>
  );
}

export default App;
