import React from "react";
import Task from "./Task";

function TaskList(props) {
  const liItems = props.taskListTask.map((item) => {
    return (
      <li>
        <Task text={item} />
      </li>
    );
  });

  return (
    <div>
      <h1>Task List</h1>
      <ul>{liItems} </ul>
    </div>
  );
}

export default TaskList;
