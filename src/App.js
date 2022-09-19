import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const localTodos = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(localTodos);
  const [activeTodo, setActiveTodo] = useState(null);

  useEffect(() => {
    // storage solo almacena string
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoDelete = (todoId) => {
    if (todoId === activeTodo?.id) {
      setActiveTodo(null);
    }
    const changedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(changedTodos);
  };

  const todoToggleCompleted = (todoId) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo?.completed } : todo
    );
    setTodos(changedTodos);
  };

  const addTodo = (todo) => {
    const newId = uuidv4();
    const newTodo = {
      ...todo,
      id: newId,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const editTodo = (todoEdited) => {
    const changedTodos = todos.map((todo) =>
      todoEdited.id === todo.id ? todoEdited : todo
    );
    setTodos(changedTodos);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList
            todos={todos}
            todoDelete={todoDelete}
            todoToggleCompleted={todoToggleCompleted}
            setActiveTodo={setActiveTodo}
          />
        </div>
        <div className="col-4">
          <TodoForm
            addTodo={addTodo}
            activeTodo={activeTodo}
            editTodo={editTodo}
            setActiveTodo={setActiveTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
