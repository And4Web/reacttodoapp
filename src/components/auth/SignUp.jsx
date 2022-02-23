import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
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
        <form className="ms-5 me-5" onSubmit={this.onSubmit}>
          <legend className="display-6 mb-3 fw-bold">Sign Up</legend>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Enter Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Enter Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </>
    );
  }
}
