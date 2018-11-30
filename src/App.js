import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Shuni', age: 20 },
      { name: 'Dafei', age: 20 },
      { name: 'Bao', age: 20 }
    ],
    otherPersons: 'some others',
    showPersons: false
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Shuni', age: 20 },
        { name: event.target.value, age: 20 },
        { name: 'Dafei', age: 20 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
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
        <h1>Hi, Shuni</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Person</button>
        {this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'lala')}
              changed={this.nameChangedHandler} />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}>My hobbies: Racing</Person>
          </div> : null}
      </div>
    );
  }
}

export default App;
