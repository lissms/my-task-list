import React from "react";

function Button(props) {
  return (
    <div>
      <input type="button" value={props.value} />
    </div>
  );
}

export default Button;
