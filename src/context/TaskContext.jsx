import React from "react";
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

const TaskContext = createContext();

function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        name: task.title,
        id: tasks.length + 1,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskContextProvider };
