import { ChatContxet } from '../../contexts/ChatContext';
import React, { useContext } from 'react';
import classes from './Chat.module.css';
import Window from './Window/Window';
import Inputs from './Inputs/Inputs';

const Chat = () => {

    const { greeting } = useContext(ChatContxet);

    return (
        <div className={classes.Chat}>
            <Window />
            <div className={classes.Container}>
                <Inputs />
            </div>
        </div>
    );
};

export default Chat;