import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {id:'1', name: 'Shuni', age: 20 },
      {id:'2', name: 'Dafei', age: 20 },
      {id:'3', name: 'Bao', age: 20 }
    ],
    otherPersons: 'some others',
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); ES5 syntax
    const persons = [...this.state.persons];  // ES6 syntax
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age} 
              click={() => this.deletePersonHandler(index)} 
              key={person.id} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, Shuni</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;
