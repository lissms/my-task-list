import React from "react";
import "./task.css";

function Task(props) {
  return (
    <div className="task-container">
      <input type="checkbox" name="checkbox" id="checkbox" />
      <h5 className="my-task">{props.text}</h5>
      <h5 className="my-assigned">asignado</h5>
      <button className="remove-task-button">X</button>
    </div>
  );
}

export default Task;
