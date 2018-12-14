import React from 'react';
import './Cockpit.css';
import Aux from '../../hoc/Aux'

const cockpit = (props) => {
    
    let classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');  // classes = ['red']
    }
    if (props.persons.length <= 1) {
        classes.push('bold');  // classes = ['red', 'bold']
    }
    return (
        <Aux>
            <h1>Hi, Shuni</h1>
            <p className={classes.join(' ')}>This is a React Application</p>
            <button style={props.style} onClick={props.clicked}>Toggle Person</button>
        </Aux>
    );
};

export default React.memo(cockpit);