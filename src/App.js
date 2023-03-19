import { Header } from "./components/header/header.component";
import { TaskContainer } from "./components/tasks/taskContainer.component";

//React Imports
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskTitle: "Task 1",
      taskDescription: "Meine erste Task",
      taskDeadline: "Monday",
    },
    {
      id: 2,
      taskTitle: "Task 2",
      taskDescription: "Meine zweite Task",
      taskDeadline: "Tuesday",
    },
    {
      id: 3,
      taskTitle: "Task 3",
      taskDescription: "Meine dritte Task",
      taskDeadline: "Mittwoch",
    },
  ]);

  const onClickHandle = (event, id) => {
    event.preventDefault();
    console.log(id);
  };

  return (
    <>
      <div className="container text-center">
        <Header maintitle={"Taskery"} secondtitle={"Deine Tasks"} />
        <TaskContainer tasks={tasks} onclickHandle={onClickHandle} />
      </div>
    </>
  );
}

export default App;
