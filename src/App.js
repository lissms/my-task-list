import React from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form />
        <TaskList />
        <FilterButtons />
      </div>
    );
  }
}

export default App;
