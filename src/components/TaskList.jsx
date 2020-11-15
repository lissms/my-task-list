import React from "react";
import Task from "./Task";

function TaskList(props) {
  const liItems = props.taskList.map((item, i) => {
    return (
      <li key={i}>
        <Task text={item.task} assigned={item.assigned} id={i} removeTask={props.removeTask} />
      </li>
    );
  });

  return (
    <div>
      <h1>Task List</h1>
      <ul>{liItems}</ul>
    </div>
  );
}

export default TaskList;
