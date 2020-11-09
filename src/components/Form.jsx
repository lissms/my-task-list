import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.inputValue = "";
  }

  handleChangeInput = (ev) => {
    this.inputValue = ev.target.value;
  };

  handleClick = () => {
    this.props.handleTaskName(this.inputValue);
  };

  render() {
    return (
      <div>
        <form action="">
          <input type="text" onKeyUp={this.handleChangeInput} />
          <input onClick={this.handleClick} type="button" value="Add Taks" />
        </form>
      </div>
    );
  }
}
