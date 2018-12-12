import React from 'react';
import '../containers/App.css';

const withClass = (props) => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default withClass;
