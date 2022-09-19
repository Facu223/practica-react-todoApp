import React from "react";

export const Todo = ({
  todo,
  todoDelete,
  todoToggleCompleted,
  setActiveTodo,
}) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h3 className="card-title text-right">
          {todo?.title}

          <button
            className={`btn btn-sm ${
              todo?.completed ? "btn-outline-success" : "btn-success"
            } ml-2`}
            onClick={() => todoToggleCompleted(todo?.id)}
          >
            {todo?.completed ? "Terminado" : "Terminar"}
          </button>
        </h3>
        <hr />
        <p className="card-text text-right">{todo?.description}</p>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-sm btn-outline-primary mr-2"
            onClick={() => setActiveTodo(todo)}
          >
            {" "}
            Editar{" "}
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => todoDelete(todo?.id)}
          >
            {" "}
            Eliminar{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
