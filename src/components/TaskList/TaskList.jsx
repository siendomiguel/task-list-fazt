function TaskList({tasks}) {
  

  if (tasks.length === 0) {
    return <h1>No hay tareas para mostrar</h1>;
  }

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.name}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </>
  );
}

export { TaskList };
