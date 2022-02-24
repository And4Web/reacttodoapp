import React, { Component } from "react";
import Task from "./Task";

export default class Tasks extends Component {
  render() {
    return (
      <>
        <div className="ms-5 me-5 mt-3 bg-light">
          <table className="table text-seondary">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task</th>
                <th scope="col">Status</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <Task />
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
