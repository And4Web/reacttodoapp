import React, { Component } from "react";

export default class AddTask extends Component {
  state = {
    task: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <form className="m-5 " onSubmit={this.onSubmit}>
          <legend className="display-6 mb-3 fw-bold">Add Task</legend>
          <div className="mb-3">
            <label htmlFor="task" className="form-label">
              Enter Task
            </label>
            <input
              type="email"
              className="form-control"
              id="task"
              onChange={this.onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </>
    );
  }
}
