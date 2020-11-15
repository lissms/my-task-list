import React from "react";
import "./task.css";

function Task(props) {
  const [isChecked, setIsChecked] = React.useState(false);

  const handlerClickCheckox = (ev) => {
    setIsChecked(ev.target.checked);
  };
  const handlerClickButtonRemove = (ev) => {
    console.log(" yo soy", ev.target.id);
    console.log("tast", props.text);
    props.removeTask(ev.target.id);
  };
  return (
    <div className="task-container">
      <input type="checkbox" name="checkbox" id="checkbox" onClick={handlerClickCheckox} />
      <h5 className={`my-task ${isChecked ? "underlined" : ""}`}>{props.text}</h5>
      <h5 className={`my-assigned ${isChecked ? "underlined" : ""}`}>{props.assigned}</h5>
      <button className="remove-task-button" id={props.id} onClick={handlerClickButtonRemove}>
        X
      </button>
    </div>
  );
}

export default Task;
