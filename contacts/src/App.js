import React, { Component } from 'react';
import './App.css';
import ContactsAppContainer from './ContactsAppContainer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <ContactsAppContainer />
      </div>
    );
  }
}

export default App;
