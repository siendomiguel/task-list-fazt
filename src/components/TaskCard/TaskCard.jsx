import React from "react";
import { tasks } from "../../data/tasks";

function TaskCard({ task, deleteTask }) {
  return (
    <div>
      <h1>{task.name}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Borrar</button>
    </div>
  );
}

export { TaskCard };
