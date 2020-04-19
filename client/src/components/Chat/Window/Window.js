import { ChatContext } from '../../../contexts/ChatContext';
import classes from './Window.module.css';
import React, { useContext } from 'react';
import Alert from '../../UI/Alert/Alert';
import Message from './Message/Message';

const Window = () => {

    const { typing } = useContext(ChatContext);
    
    return (
        <section className={classes.Window}>
            <div className={classes.message}>
                <Message />
                <Alert>You in the Loby choose a room to chat</Alert>
                {typing ? <em>{typing}</em> : null}
            </div>
        </section>
    );
};

export default Window;