import classes from './Inputs.module.css';
import React from 'react';

const Inputs = () => {
    return (
        <div className={classes.Inputs}>
            <i className="fas fa-paper-plane"></i>
            <input placeholder="Type a message" />
        </div>
    );
}

export default Inputs;