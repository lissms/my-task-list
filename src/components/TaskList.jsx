import React, { Component } from "react";

export default class TaskList extends Component {
  render() {
    const tasksValue = this.props.value.map((newtask) => {
      return (
        <li>
          <input type="checkbox" name="" id="" />
          {newtask} <div class="delete-button">X</div>
        </li>
      );
    });

    return (
      <div>
        <ul>{tasksValue}</ul>
      </div>
    );
  }
}
