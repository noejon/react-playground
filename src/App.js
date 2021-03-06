import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 0,name: 'Jon', age: 32 },
      { id: 1, name: 'Meng', age: 30 }
    ],
    showPersons: false
  };

  deletePersonHandler = (index) => {
    // Slice or [...array] is called here because you should not work directly in the state
    // Doing otherwise works but it goes against React's state management
    const persons = [...this.state.persons];

    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // Alternative to ternarty operators
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {
            // React uses vanilla JS
            this.state.persons.map((person, index) => {
              return (
                <Person
                name={person.name} 
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
              )
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <button
          onClick={this.togglePersonsHandler.bind(this, 'Jono') }
          style={style}>Toggle persons</button>
        {/* ternary expression to display or not an element */}
        {/* {
          this.state.showPersons ?
            <div> 
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
          : null
        } */}
      { persons } {/* this is the preferred way to render conditionnally */}
      </div>
    );
  }
}

export default App;
