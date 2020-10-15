import React, { Component } from "react";

export default class App extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }
  render() {
    return (
      <div>
        <h1>Web Project</h1>
        <div>
          {this.state.users.map((user) => (
            <div key={id}>
              <h1>{user.id}</h1>
              <h2>{user.title}</h2>
              <h2>{user.description}</h2>
              <h2>{user.URL}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
