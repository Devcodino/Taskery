import { Task } from "./task.component";

export const TaskContainer = ({ tasks, onclickHandle }) => {
  return (
    <>
      <div className="container task-container">
        {tasks.map((task, index) => {
          return (
            <Task key={index} task={task} onclickHandles={onclickHandle} />
          );
        })}
      </div>
    </>
  );
};
