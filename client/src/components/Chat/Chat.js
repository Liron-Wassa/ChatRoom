import classes from './Chat.module.css';
import Window from './Window/Window';
import Inputs from './Inputs/Inputs';
import React from 'react';

const Chat = () => (
    <div className={classes.Chat}>
        <Window />
        <div className={classes.Container}>
            <Inputs />
        </div>
    </div>
);

export default Chat;