import { ChatContext } from '../../../contexts/ChatContext';
import React, { useContext, useRef } from 'react';
import classes from './Inputs.module.css';

const Inputs = () => {

    const { handleUserMessage } = useContext(ChatContext);
    const inputRef = useRef(null);
    let message = "";

    const clickHandler = () => {        
        handleUserMessage(message);
        inputRef.current.value = "";
        message = "";
    }

    const changeInputHandler = (e) => {
        message = e.target.value;
    };

    return (
        <div className={classes.Inputs}>
            <i className="fas fa-paper-plane" onClick={clickHandler}></i>
            <input placeholder="Type a message" onChange={changeInputHandler} ref={inputRef} />
        </div>
    );
}

export default Inputs;