import { ChatContext } from '../../../contexts/ChatContext';
import classes from './BackDrop.module.css';
import React, { useContext } from 'react';

const BackDrop = () => {

    const { show, setShow } = useContext(ChatContext);

    return (
        show ? <div className={classes.BackDrop} onClick={() => setShow(!show)}></div> : null
    );
};

export default BackDrop;