import React from "react";
import ItemForm from "./ItemForm";
import "./Form.css";

function Form(props) {
  return (
    <div className="form-container">
      <ItemForm
        name="task"
        id="task"
        placeholder="tarea"
        handlerClick={props.handlerClick}
        value={props.task}
        setTask={props.setTask}
      />
      <ItemForm
        name="assigned to"
        id="assigned"
        placeholder="asignada a:"
        handlerClick={props.handlerClick}
        value={props.assigned}
        setAssigned={props.setAssigned}
      />
      <input type="button" value="Add task" onClick={props.handlerClick} />
    </div>
  );
}

export default Form;
