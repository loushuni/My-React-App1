import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    

    let classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');  // classes = ['red']
    }
    if (props.persons.length <= 1) {
        classes.push('bold');  // classes = ['red', 'bold']
    }
    return (
        <div>
            <h1>Hi, Shuni</h1>
            <p className={classes.join(' ')}>This is a React Application</p>
            <button style={style} onClick={this.togglePersonsHandler}>Toggle Person</button>
        </div>
    );
};


export default cockpit;