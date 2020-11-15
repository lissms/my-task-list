import React from "react";
import Task from "./Task";

function TaskList(props) {
  const liItems = props.taskList.map((item) => {
    return (
      <li>
        <Task text={item.task} assigned={item.assigned} />
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
