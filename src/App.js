import React from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [task, setTask] = React.useState("");
  const [assigned, setAssigned] = React.useState("");
  const [taskList, settaskList] = React.useState([]);

  const handlerClick = () => {
    settaskList([...taskList, task]);
  };
  return (
    <div>
      <h1>My task manager App</h1>
      <Form handlerClick={handlerClick} assigned={assigned} task={task} setTask={setTask} setAssigned={setAssigned} />
      <TaskList taskList={taskList} settaskList={settaskList} />
      <FilterButtons />
    </div>
  );
}

export default App;
