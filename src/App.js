import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // state is only available in classes that extends Component
  // and they are not available to function components such as Person
  // Fucntion components should be used as much as possible
  state = {
    persons: [
      { name: 'Jon', age: 32 },
      { name: 'Meng', age: 30 }
    ]
  };

  /**
   * A state change will lead to the DOM to be refreshed. Only changes in state and props trigger React to re-render your components and update the DOM
   */

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>Test</p>
        <button>Switch names</button>
        {/* <Person name="Jon" age="32">My Hobbies: Le Racing</Person>
        <Person name="Meng" age="30"/> */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Le Racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    );
  }
}

export default App;
