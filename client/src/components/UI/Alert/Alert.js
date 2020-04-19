import { ChatContext } from '../../../contexts/ChatContext';
import React, { useContext } from 'react';
import classes from './Alert.module.css';

const Alert = (props) => {

    const { messages } = useContext(ChatContext);
    
    let attachedClasses = [classes.Alert, classes.Show];

    if(messages.length) {
        attachedClasses = [classes.Alert, classes.Hide];
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <h2>{props.children}</h2>
        </div>
    );
    
};

export default Alert;