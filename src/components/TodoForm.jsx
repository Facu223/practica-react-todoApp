import React, { useEffect, useState } from "react";

const TodoForm = ({ addTodo, activeTodo, editTodo, setActiveTodo }) => {
  const initialFormValues = {
    title: "",
    description: "",
  };

  useEffect(() => {
    if (activeTodo) {
      setFormValues(activeTodo);
      return
    }
    setFormValues(initialFormValues)
  }, [activeTodo]);

  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const { title, description } = formValues;

  const handleInputChange = (e) => {
    setError(false);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const cancelEditTodo = () => {
    setActiveTodo(null);
    setFormValues(initialFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" && description.trim() === "") {
      setError("Debes completar los datos");
      return;
    } else if (description.trim() === "") {
      setError("Debes indicar una descripción");
      return;
    } else if (title.trim() === "") {
      setError("Debes indicar un título");
      return;
    } else {
      if (activeTodo) {
        editTodo(formValues);
        setFormValues(initialFormValues);
        setSuccessMessage("Editado con éxito");
        setActiveTodo(null);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 2000);
        return;
      }
      addTodo(formValues);
      setFormValues(initialFormValues);
      setSuccessMessage("Agregado con éxito");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 2000);
    }
  };

  return (
    <div>
      {activeTodo ? <h2 className="text-center display-5">Editar tarea</h2> : <h2 className="text-center display-5">Nueva tarea</h2>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="titulo"
          value={title}
          className="form-control"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Descripcion"
          value={description}
          className="form-control mt-2"
          name="description"
          onChange={handleInputChange}
        ></textarea>
        {activeTodo ? (
          <>
            <button className="btn btn-primary btn-block mt-2">
              Editar tarea
            </button>

            <button
              onClick={cancelEditTodo}
              className="btn btn-outline-dark btn-block mt-2"
            >
              Cancelar Editar
            </button>
          </>
        ) : (
          <button className="btn btn-primary btn-block mt-2">
            Agregar tarea
          </button>
        )}
      </form>

      {error && <div className="alert alert-danger mt-2">{error}</div>}
      {successMessage && (
        <div className="alert alert-success mt-2">{successMessage}</div>
      )}
    </div>
  );
};

export default TodoForm;
