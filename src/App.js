import React from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: ["aquí será pintada tu tarea"],
    };
  }
  getInputValue = (task) => {
    this.setState((prevState) => {
      const newTaskList = [...prevState.taskList, task];

      return {
        taskList: newTaskList,
      };
    });
  };
  render() {
    return (
      <div className="App">
        <Form handleTaskName={this.getInputValue} />
        <TaskList value={this.state.taskList[0]} />
        <FilterButtons />
      </div>
    );
  }
}

export default App;
