import React, { Component } from "react";
import { render } from "react-dom";
import SortableTree from "react-sortable-tree";

class App extends Component {
  constructor(props) {
    super(props);
    this.clicks = this.clicks.bind(this);
    this.state = {
      treeData: [
        {
          title: "Chicken",
          expanded: true,
          children: [{ title: "Egg" }, { title: "EGG 10" }, { title: "EGG 11" }]
        }
      ]
    };
  }
  clicks(event) {
    event.preventDefault();
    console.log("Working Fine!");
  }
  Tex(events) {
    console.log(events);
    this.setState({ treeData: events });
  }

  render() {
    return (
      <div style={{ height: 500 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={this.Tex.bind(this)}
        />
        <form onChange={this.clicks.bind(this)}>
          <div>
            <button input="submit">Click here</button>
          </div>
        </form>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
