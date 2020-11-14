import React from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

function App(props) {
  return (
    <div>
      <h1> My task manager App</h1>
      <Form />
      <TaskList />
      <FilterButtons />
    </div>
  );
}

export default App;
