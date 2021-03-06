import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Update [App.js] shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Update [App.js] componentWillUpdate', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Update [App.js] getDerivedStateFromProps', nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('Update [App.js] getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('Update [App.js] componentDidUpdate');
  }

  state = {
    persons: [
      { id: '1', name: 'Shuni', age: 20 },
      { id: '2', name: 'Dafei', age: 20 },
      { id: '3', name: 'Bao', age: 20 }
    ],
    otherPersons: 'some others',
    showPersons: false,
    toggleClicked: 0
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  render() {
    console.log('[App.js] render');
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

    return (
      <WithClass classes="App">
        <Cockpit
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          style={style}
        />
        {persons}
      </WithClass>
    );
  }
}

export default App;
