import React from "react";

const Gift = (props) => {
  const handlClick = (ev) => {
    const buttonId = ev.target.id;
    props.handleFunc(buttonId);
  };
  return (
    <div>
      <p>{props.text}</p>
      <button id={props.id} onClick={handlClick}>
        {props.textButton}
      </button>
    </div>
  );
};

export default Gift;
