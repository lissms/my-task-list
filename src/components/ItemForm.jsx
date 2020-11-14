import React from "react";

function ItemForm(props) {
  return (
    <div>
      <input type="text" name={props.name} id={props.id} placeholder={props.placeholder} />
    </div>
  );
}

export default ItemForm;
