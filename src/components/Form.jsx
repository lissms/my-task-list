import React from "react";
import ItemForm from "./ItemForm";
import "./Form.css";

function Form(props) {
  return (
    <div className="form-container">
      <ItemForm name="task" id="task" placeholder="tarea" />
      <ItemForm name="assigned to" id="assigned" placeholder="asignada a:" />
      <input type="button" value="Add task" />
    </div>
  );
}

export default Form;
