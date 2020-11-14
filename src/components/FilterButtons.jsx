import React from "react";
import Button from "./Button";
import "./FilterButtons.css";

function FilterButtons(props) {
  return (
    <div className="buttons-container">
      <Button value="To Do" />
      <Button value="Done" />
      <Button value="All" />
    </div>
  );
}

export default FilterButtons;
