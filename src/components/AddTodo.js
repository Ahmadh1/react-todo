import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const AddTodo = ({ todos, input, setInput, setTodos, editTodo, setEditTodo }) => {

  // check input
  const changeInput = (e) => {
    setInput(e.target.value);
  };

  // to change edit todo
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  // update todo
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  // add new Todo
  const addTodo = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: input,
          completed: false,
        },
      ]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }

  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add new Todo...."
            value={input}
            onChange={changeInput}
            autoFocus
          />
        </div>
        <div className="form-group">
          <button className="btn btn-outline-success">{ editTodo ? "Update" : "Add new" }</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
