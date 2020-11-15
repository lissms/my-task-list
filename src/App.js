import React from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [task, setTask] = React.useState("");
  const [assigned, setAssigned] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);

  const handlerClick = () => {
    if (task !== "") {
      const myTaskObjet = { task, assigned };
      setTaskList([...taskList, myTaskObjet]);
      setTask("");
      setAssigned("");
    }
  };

  const removeTask = (id) => {
    taskList.splice(id, 1);
    setTaskList([...taskList]); // para cambiar un objeto o array
  };

  return (
    <div>
      <h1>My task manager App</h1>
      <Form handlerClick={handlerClick} assigned={assigned} task={task} setTask={setTask} setAssigned={setAssigned} />
      <TaskList task={task} taskList={taskList} assigned={assigned} removeTask={removeTask} />
      <FilterButtons />
    </div>
  );
}

export default App;
