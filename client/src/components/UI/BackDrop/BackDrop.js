import classes from './BackDrop.module.css';
import React from 'react';

const BackDrop = (props) => (
    props.show ? <div className={classes.BackDrop} onClick={props.clicked}></div> : null
);

export default BackDrop;