import React from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [task, setTask] = React.useState("");
  const [assigned, setAssigned] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);
  const myTaskObjet = { task, assigned };

  const handlerClick = () => {
    if (task !== "") {
      setTaskList([...taskList, myTaskObjet]);
      setTask("");
      setAssigned("");
    }
  };
  return (
    <div>
      <h1>My task manager App</h1>
      <Form handlerClick={handlerClick} assigned={assigned} task={task} setTask={setTask} setAssigned={setAssigned} />
      <TaskList task={task} taskList={taskList} assigned={assigned} />
      <FilterButtons />
    </div>
  );
}

export default App;
