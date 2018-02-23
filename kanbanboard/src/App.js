import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KanbanBoardContainer from './KanbanBoardContainer';

class App extends Component {

  render() {

    return (
      <div className="App">
        <KanbanBoardContainer />
      </div>
    );
  }
}

export default App;
