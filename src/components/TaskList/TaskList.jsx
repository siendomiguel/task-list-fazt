import { TaskCard } from "../TaskCard/TaskCard";

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <h1>No hay tareas para mostrar</h1>;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
}

export { TaskList };
