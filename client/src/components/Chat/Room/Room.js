import { ChatContext } from '../../../contexts/ChatContext';
import React, { useContext } from 'react';
import classes from './Room.module.css';

const Room = () => {

    const { room, usersRoom } = useContext(ChatContext);

    return (
        <h1 className={classes.Room}>{room ? `${room}: ${usersRoom.length}` : "Loby"}</h1>
    );
}

export default Room;