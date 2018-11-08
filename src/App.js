import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Shuni', age: 20 },
      { name: 'Dafei', age: 20 },
      { name: 'hei', age: 20 }
    ],
    otherPersons: 'some others'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // Don't do this: this.state.persons[0].name = 'Shunini'
    this.setState({
      persons: [
        { name: 'Shuni', age: 20 },
        { name: 'Dafei', age: 20 },
        { name: newName, age: 20 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Shuni</h1>
        <button onClick={() => this.switchNameHandler('pipi')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'lala')} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>My hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
