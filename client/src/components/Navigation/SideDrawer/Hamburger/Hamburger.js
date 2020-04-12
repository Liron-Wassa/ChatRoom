import classes from './Humburger.module.css';
import React from 'react';

const Humburger = (props) => (
    <div className={classes.Humburger}>
        <div onClick={props.clicked}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
);

export default Humburger;