import { useEffect, useState } from 'react';
import {tasks as data} from './tasks'



function TaskList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data)
  },[]);

  if (tasks.length === 0) {
    return <h1>No hay tareas para mostrar</h1>
  }

  return (
    <>
      <h1>Hola</h1>
      <p>Esta es una descipcion</p>
      {
        tasks.map((task) => (
          <div key={task.id}>
            <h1>{task.name}</h1>
            <p>{task.description}</p>
          </div>
        ))
      }
    </>
  );
}

export { TaskList };
