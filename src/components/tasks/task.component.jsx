export const Task = (props) => {
  const { taskTitle, taskDescription, taskDeadline, id } = props.task;
  const Handler = props.onclickHandles;

  const onclickHandler = (event) => {
    Handler(event, id);
  };

  return (
    <>
      <div className="task flex between">
        <div>
          <h3>{taskTitle}</h3>
          <p>{taskDescription}</p>
          <small>{taskDeadline}</small>
        </div>
        <div className="flex center pointer" onClick={onclickHandler}>
          <i className="fa-solid fa-trash btn-trash"></i>
        </div>
      </div>
    </>
  );
};
