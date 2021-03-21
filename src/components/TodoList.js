import { FaCheck, FaPen, FaTrash } from "react-icons/fa";
const TodoList = ({ todos, setTodos, setEditTodo }) => {

  // if toso is completed
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...todo, completed: !item.completed };
        }
        return item;
      })
    );
  };
  // edit todo
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  // delete todo
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h4 className="">Task Todo ({todos.length})</h4>
      <ul className="list-group">
        { todos.map((todo) => (
          <li
            className={`no-decor ${todo.completed ? "completed" : ""
            }`}
            key={todo.id}
          >
            {todo.title}
            <div className="btn-group btn-group-sm float-right">
              <button
                className="btn btn-outline-dark"
                onClick={() => handleComplete(todo)}
              >
                <FaCheck />
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleEdit(todo)}
              >
                <FaPen />
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleDelete(todo)}
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
