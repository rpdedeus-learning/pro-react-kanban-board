import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KanbanBoard from './KanbanBoard';

let cardlist = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should react the **whole** book",
    color: "#BD8D31",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react/)",
    status: "todo",
    color: "#3A7E28",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiements",
        done: false
      }
    ]
  },
  {
    id: 3,
    title: "A new card with a super long description that is much longer than 80 characters. This will certainly fail the validation for this property.",
    description: "",
    status: "todo",
    color: "",
    tasks: []
  }
]

class App extends Component {

  render() {

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <KanbanBoard cards={cardlist} />
      </div>
    );
  }
}

export default App;
