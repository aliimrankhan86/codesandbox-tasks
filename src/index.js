import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      { name: "Ali", age: 32 },
      { name: "Jimmy", age: 36 },
      { name: "Salman", age: 38 },
      { name: "Kami", age: 41 },
      { name: "Shani", age: 45 }
    ];
  }

  handleClick = () => {
    this.state.map(function(item, index) {
      document.getElementById("list").innerHTML += `<br /> Name is ${
        item.name
      } & Index is ${index + 1}`;
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div id="list">
          <button onClick={this.handleClick}>Click Me</button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
