import React from "react";
import "./task.css";

function Task(props) {
  const handlerClickButtonRemove = (ev) => {
    console.log(" yo soy", ev.target.id);
    console.log("tast", props.text);
    props.removeTask(ev.target.id);
  };

  return (
    <div className="task-container">
      <input type="checkbox" name="checkbox" id={props.id} checked={props.isChecked} onClick={props.changeCkeckTask} />
      <h5 className={`my-task ${props.isChecked ? "underlined" : ""}`}>{props.text}</h5>
      <h5 className={`my-assigned ${props.isChecked ? "underlined" : ""}`}>{props.assigned}</h5>
      <button className="remove-task-button" id={props.id} onClick={handlerClickButtonRemove}>
        X
      </button>
    </div>
  );
}

export default Task;
