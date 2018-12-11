import React, { Component } from 'react';
import './App.css';
import Person from '../components/Person/Person.js';
import Persons from '../components/Persons/Persons'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Shuni', age: 20 },
      { id: '2', name: 'Dafei', age: 20 },
      { id: '3', name: 'Bao', age: 20 }
    ],
    otherPersons: 'some others',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    //找到要修改的person的id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //找到要修改的person。person是js object，要copy一份person，update immutably
    const person = { ...this.state.persons[personIndex] };
    //把person的name修改掉
    person.name = event.target.value;
    //copy一份persons
    const persons = [...this.state.persons];
    //在persons中把要修改的那个person更改
    persons[personIndex] = person;
    //使得state中persons等于修改好的persons copy
    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); ES5 syntax
    const persons = [...this.state.persons];  // ES6 syntax
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            chanaged={this.nameChangedHandler} />
        </div>
      );
      style.backgroundColor = 'red';
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');  // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');  // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, Shuni</h1>
        <p className={classes.join(' ')}>This is a React Application</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;
