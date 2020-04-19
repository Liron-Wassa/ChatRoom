import { ChatContext } from '../../contexts/ChatContext';
import React, { useContext, useEffect } from 'react';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import classes from './Chat.module.css';
import queryString from 'query-string';
import Window from './Window/Window';
import Inputs from './Inputs/Inputs';

const Chat = (props) => {

    const { emitRoom, chatRoute, setMessage, setUserName, updateRoom, setRoom } = useContext(ChatContext);

    const data = queryString.parse(props.location.search);
    
    useEffect(() => {
        if(data.room && chatRoute) {
            console.log("componentDidUpdate: [Chat.js]");
            updateRoom();
            setMessage([]);
            emitRoom(data);
            console.log(data);
        }
        // eslint-disable-next-line
    }, [data.room]);

    useEffect(() => {      
        return () => {
            console.log("componentWillUnmount: [Chat.js]");
            setMessage([]);
            setUserName('');
            setRoom('');
        }
        // eslint-disable-next-line
    }, []);
    
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