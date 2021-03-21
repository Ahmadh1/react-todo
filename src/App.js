import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./css/style.css";
function App() {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialTodos);
  const [editTodo, setEditTodo] = useState(null);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card mt-custom">
              <div className="card-header">Add new Todo</div>
              <div className="card-body">
                <AddTodo
                  input={input}
                  setInput={setInput}
                  todos={todos}
                  setTodos={setTodos}
                  editTodo={editTodo}
                  setEditTodo={setEditTodo}
                />
                <div className="dropdown-divider"></div>
                <TodoList
                  todos={todos}
                  setTodos={setTodos}
                  setEditTodo={setEditTodo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
