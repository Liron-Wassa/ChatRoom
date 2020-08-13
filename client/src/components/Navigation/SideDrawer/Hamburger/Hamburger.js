import { ChatContext } from '../../../../contexts/ChatContext';
import classes from './Humburger.module.css';
import React, { useContext } from 'react';

const Humburger = () => {

    const { show, setShow } = useContext(ChatContext);

    return (
        <div className={classes.Humburger} onClick={() => setShow(!show)}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Humburger;