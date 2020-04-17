import ToolBar from '../Navigation/ToolBar/ToolBar';
import React from 'react';
import classes from './Chat.module.css';
import Window from './Window/Window';
import Inputs from './Inputs/Inputs';

const Chat = () => {

    return (
        <React.Fragment>
            <ToolBar />
            <div className={classes.Chat}>
                <Window />
                <div className={classes.Container}>
                    <Inputs />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Chat;