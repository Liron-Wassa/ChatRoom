import { ChatContext } from '../../../../contexts/ChatContext';
import classes from './Message.module.css';
import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Message = () => {
    
    const { messages } = useContext(ChatContext);

    let messageElement = null;    
    
    if(messages.length) {
        
        messageElement = messages.map(message => {
            return (
                <div key={uuidv4()} className={classes.Message}>
                    <span dir="rtl">{message.name}</span>
                    <em>{message.time}</em>
                    <div><strong dir="rtl">{message.text}</strong></div>
                </div>
            );
        });
    }

    return messageElement;
}

export default Message;