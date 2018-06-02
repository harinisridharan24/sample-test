import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    output : [
    {name : 'Jon Snow'},
    {name : 'Danerys Targareyan'},
    {name : 'Ned Stark'}
    ]
  }

  manipulateUserName = (event) => {
    this.setState( {
      output : [ 
        { name : event.target.value },
        { name : event.target.value },
        { name : event.target.value }
      ]
    } )
  }
  render() {
    return (
      <div className="App">
        <h1> React Assignment </h1>
        <UserInput changed = {this.manipulateUserName.bind(this)} name = {this.state.output[0].name} />
        <UserOutput name = {this.state.output[0].name} />
        <UserInput changed = {this.manipulateUserName.bind(this)} name = {this.state.output[1].name} />
        <UserOutput name = {this.state.output[1].name} />
        <UserInput changed = {this.manipulateUserName.bind(this)} name = {this.state.output[2].name} />
        <UserOutput name = {this.state.output[2].name} />
        <UserInput changed = {this.manipulateUserName.bind(this)} name = "Arya Stark" />
        <UserOutput name = "Arya Stark" />
      </div>
    );
  }
}

export default App;
