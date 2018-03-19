import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerData: []
    };
  }

  componentDidMount() {
    const url = "http://localhost:8080/players";

    fetch(url, { method: "GET" })
      .then(result => result.json())
      .then(result =>
        this.setState({
          playerData: result
        })
      );
  }

  render() {
    const Players = this.state.playerData.map((item, key) => {
      return (
        <tr key={key}>
          <td>{item.name}</td>
          <td>{item.points}</td>
        </tr>
      );
    });

    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>{Players}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
