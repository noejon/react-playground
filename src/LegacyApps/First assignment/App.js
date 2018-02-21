import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  
  state = {
    username: 'Jonathan'
  };

  changeUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div>
        <UserInput changed={this.changeUsername} username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username="Audrey"/>
        <UserOutput username="Meng"/>
      </div>
    );
  }
}

export default App;
