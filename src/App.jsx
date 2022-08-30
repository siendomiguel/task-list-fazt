import { useState, useEffect } from "react";

import { TaskList } from "./components/TaskList/TaskList";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { tasks as data } from "./components/TaskList/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      <TaskForm />
      <TaskList tasks={tasks} />
    </>
  );
};

export { App };
