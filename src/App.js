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
      const myTaskObjet = { task, assigned, isChecked: false };
      setTaskList([...taskList, myTaskObjet]);
      setTask("");
      setAssigned("");
    }
  };

  const removeTask = (id) => {
    taskList.splice(id, 1);
    setTaskList([...taskList]); // para cambiar un objeto o array
    console.log("taskList", taskList);
  };

  const changeCkeckTask = (event) => {
    const taskId = parseInt(event.target.id);

    // solucion 1
    //taskList[taskId].isChecked = !taskList[taskId].isChecked; // Aunque funciona, un estado nunca se debe modificar
    //setTaskList([...taskList]);

    // solucion 2 PRO
    const updatedTaskList = taskList.map((task, index) => {
      if (index === taskId) {
        console.log("coincide");
        const updatedTask = {
          ...task,
          isChecked: !task.isChecked,
        };
        return updatedTask;
      } else {
        return task;
      }
    });
    setTaskList(updatedTaskList);
  };

  return (
    <div>
      <h1>My task manager App</h1>
      <Form handlerClick={handlerClick} assigned={assigned} task={task} setTask={setTask} setAssigned={setAssigned} />
      <TaskList
        task={task}
        taskList={taskList}
        assigned={assigned}
        removeTask={removeTask}
        changeCkeckTask={changeCkeckTask}
      />
      <FilterButtons />
    </div>
  );
}

/* pendiente:- me sale un error, si tendo una lista 1 2 3, y marco como realizado el 3, y elimino el dos, el tres me sale como realizado , ya q coge la posicion q tenia antes dos. Tengo que arregalrlo. */
export default App;
