import { ChatContext } from '../../../contexts/ChatContext';
import React, { useContext, useRef } from 'react';
import classes from './Inputs.module.css';

const Inputs = () => {

    const { handleUserMessage, handleTyping, room } = useContext(ChatContext);
    const inputRef = useRef(null);
    let message = "";

    const clickHandler = () => {
        // console.log(message);
        const tempArr = message.split(" ");
        const joined = tempArr.join(" ");
        
        if(joined) {
            console.log(tempArr);
            console.log(joined);
            console.log(joined.length);
        }

        // handleUserMessage(message);
        // inputRef.current.value = "";
        // inputRef.current.focus();  
        // message = "";
    }

    const changeInputHandler = (e) => {
        if(room) {
            if(inputRef.current.value) {
                handleTyping("TYPING");
            }
            else {
                handleTyping("UNTYPING");
            }
            message = e.target.value;
        }
    };

    return (
        <div className={classes.Inputs}>
            <i className="fas fa-paper-plane" onClick={clickHandler}></i>
            <input placeholder="Type a message" onChange={changeInputHandler} ref={inputRef} />
        </div>
    );
}

export default Inputs;