import classes from './Chat.module.css';
import Window from './Window/Window';
import React from 'react';

const Chat = () => (
    <div className={classes.Chat}>
        <Window />
        <div className={classes.Container}>
            <button>Send</button>
            <input placeholder="Type a message" />
        </div>
    </div>
);

export default Chat;