import React, { useContext, useEffect, useRef } from 'react';
import { ChatContext } from '../../../contexts/ChatContext';
import classes from './Window.module.css';
import Alert from '../../UI/Alert/Alert';
import Message from './Message/Message';

const Window = () => {

    const { typing, messages } = useContext(ChatContext);
    const windowRef = useRef(null);
    
    useEffect(() => {

        console.log("componentDidUpdate: [Window.js]");

        windowRef.current.scrollTop = windowRef.current.scrollHeight;

    }, [messages]);

    return (
        <section className={classes.Container}>
            <div className={classes.Window} ref={windowRef}>
                <Message />
                <Alert>You in the Loby choose a room to chat</Alert>
                {typing ? <em>{typing}</em> : null}
            </div>
        </section>
    );
};

export default Window;