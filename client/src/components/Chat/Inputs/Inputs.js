import { ChatContext } from '../../../contexts/ChatContext';
import React, { useContext, useRef, useState } from 'react';
import classes from './Inputs.module.css';

const Inputs = () => {

    const { handleUserMessage, handleTyping, room } = useContext(ChatContext);
    const [messageIsValid, setMessageIsValid] = useState(false);
    const inputRef = useRef(null);
    let message = "";

    const clickHandler = (event) => {
        event.preventDefault();
        handleUserMessage(message);
        inputRef.current.value = "";
        inputRef.current.focus();  
        message = "";
    };

    const changeInputHandler = (e) => {
        const messageValue = e.target.value.trim();
        setMessageIsValid(!!messageValue);
        if(room && messageIsValid) {
            if(inputRef.current.value) {
                handleTyping("TYPING");
            }
            else {
                handleTyping("UNTYPING");
            }
            message = e.target.value;
        };
    };
    
    return (
        <form className={classes.Inputs} onSubmit={clickHandler}>
            {messageIsValid ? <button><i className="fas fa-paper-plane"></i></button> : null}
            <input placeholder="Type a message" onChange={changeInputHandler} ref={inputRef} />
        </form>
    );
}

export default Inputs;