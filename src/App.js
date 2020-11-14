import React from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [task, setTask] = React.useState("task");
  const [assigned, setAssigned] = React.useState("assigned to");

  const handlerClick = () => {
    console.log("task, assigned", task, assigned);
  };
  return (
    <div>
      <h1>My task manager App</h1>
      <Form handlerClick={handlerClick} assigned={assigned} task={task} setTask={setTask} setAssigned={setAssigned} />
      <TaskList />
      <FilterButtons />
    </div>
  );
}

export default App;
