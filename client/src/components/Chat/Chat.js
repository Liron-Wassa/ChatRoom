import { ChatContext } from '../../contexts/ChatContext';
import React, { useContext, useEffect } from 'react';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import queryString from 'query-string';
import Window from './Window/Window';
import Inputs from './Inputs/Inputs';

const Chat = (props) => {

    const { emitRoom, chatRoute, setMessage, setUserName, updateRoom, setRoom } = useContext(ChatContext);

    const data = queryString.parse(props.location.search);
    
    useEffect(() => {
        if(data.room && chatRoute) {
            updateRoom();
            setMessage([]);
            emitRoom(data);
        };
        // eslint-disable-next-line
    }, [data.room]);

    useEffect(() => {      
        return () => {
            setMessage([]);
            setUserName('');
            setRoom('');
        };
        // eslint-disable-next-line
    }, []);
    
    return (
        <React.Fragment>
            <ToolBar />
            <Window />
            <Inputs />
        </React.Fragment>
    );
};

export default Chat;