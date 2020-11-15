import React from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [task, setTask] = React.useState("");
  const [assigned, setAssigned] = React.useState("");
  const [taskListTask, settaskListTask] = React.useState([]);
  const [taskListTaskassigned, settaskListTaskassigned] = React.useState([]);

  const handlerClick = () => {
    if (task !== "") {
      settaskListTask([...taskListTask, task]);
      settaskListTaskassigned([...taskListTaskassigned, assigned]);
    }
  };
  return (
    <div>
      <h1>My task manager App</h1>
      <Form handlerClick={handlerClick} assigned={assigned} task={task} setTask={setTask} setAssigned={setAssigned} />
      <TaskList task={task} taskListTask={taskListTask} taskListTaskassigned={taskListTaskassigned} />
      <FilterButtons />
    </div>
  );
}

export default App;
