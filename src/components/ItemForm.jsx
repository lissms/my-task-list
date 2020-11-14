import React from "react";

function ItemForm(props) {
  const getInputValue = (ev) => {
    if (ev.target.id === "assigned") {
      props.setAssigned(ev.target.value);
    } else if (ev.target.id === "task") {
      props.setTask(ev.target.value);
    }
    console.log(ev.target.id, ev.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        setTask={props.setTask}
        setAssigned={props.setAssigned}
        onChange={getInputValue}
      />
    </div>
  );
}

export default ItemForm;
