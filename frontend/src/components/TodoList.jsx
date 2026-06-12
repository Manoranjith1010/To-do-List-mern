import "./TodoList.css";

function TodoList({ todos, onUpdate, onDelete }) {
  const handleToggle = (id, currentStatus) => {
    onUpdate(id, { completed: !currentStatus });
  };

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">No tasks yet. Add one to get started!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo._id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo._id, todo.completed)}
                className="checkbox"
              />
              <span className="todo-title">{todo.title}</span>
              <button
                onClick={() => onDelete(todo._id)}
                className="delete-button"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
