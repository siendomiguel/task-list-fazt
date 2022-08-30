import { useState } from "react";

const TaskForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <textarea
          id=""
          placeholder="Escribe aqui la descripción de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button>Guardar</button>
      </form>
    </>
  );
};

export { TaskForm };
