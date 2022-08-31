import { TaskList } from "./components/TaskList/TaskList";
import { TaskForm } from "./components/TaskForm/TaskForm";

const App = () => {
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
};

export { App };
