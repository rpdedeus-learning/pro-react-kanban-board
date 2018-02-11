import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsApp from './ContactsApp';

let contacts = [
  { 
      name: "Cassio Zen", 
      email: "cassiozen@gmail.com"
  },
  { 
      name: "Dan Abromov", 
      email: "danabromov@host.com"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactsApp contacts={contacts} />
      </div>
    );
  }
}

export default App;
