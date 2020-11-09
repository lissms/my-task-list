import React, { Component } from "react";

export default class FilterButtons extends Component {
  render() {
    return (
      <div>
        <input type="button" value="All" />
        <input type="button" value="To Do" />
        <input type="button" value="Done" />
      </div>
    );
  }
}
