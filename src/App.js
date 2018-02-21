import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // state is only available in classes that extends Component
  // and they are not available to function components such as Person
  // Function components should be used as much as possible
  state = {
    persons: [
      { name: 'Jon', age: 32 },
      { name: 'Meng', age: 30 }
    ]
  };

  /**
   * A state change will lead to the DOM to be refreshed. Only changes in state and props trigger React to re-render your components and update the DOM
   */

   // The function is defined as follow to avoid having to bind it in the constructor.
   // If it was defined as an ES6 function, it could not be called using the this of the class.
  switchNameHandler = (newName) => {
    // DO NOT DO THIS: this.state.persons[0].state.name = 'Jonathan';
    // Use setState instead
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Meng', age: 19 }
      ] 
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Jon', age: 32 },
        { name: event.target.value, age: 19 }
      ] 
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>Test</p>
        {/* Use bind to pass parameters to the function */}
        <button
          onClick={this.switchNameHandler.bind(this, 'Jono') }
          style={style}
        >Switch names</button>
        {/* <Person name="Jon" age="32">My Hobbies: Le Racing</Person>
        <Person name="Meng" age="30"/> */}
        {/* Another way to pass parameters to the function would be using an ES6 arrow function. Bind is the preferred method though (TODO: Google why) */}
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          switch={() => this.switchNameHandler('Jonathan') }
        >My Hobbies: Le Racing</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;
