import React from "react";
import { Todo } from "./Todo";

const TodoList = ({
  todos,
  todoDelete,
  todoToggleCompleted,
  setActiveTodo,
}) => {
  return (
    <div>
      <h2 className="text-center display-5">Soy TodoList</h2>

      <div>
        {todos?.length === 0 ? (
          <h1 className="alert alert-primary">No hay tareas por mostrar</h1>
        ) : (
          todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              todoDelete={todoDelete}
              todoToggleCompleted={todoToggleCompleted}
              setActiveTodo={setActiveTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
