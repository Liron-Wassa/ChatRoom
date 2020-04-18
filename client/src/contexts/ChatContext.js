import React, { useState, createContext, useEffect } from 'react';
import io from 'socket.io-client';

let socket;

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
    
    const ENDPOINT = "http://localhost:5000";
    const [show, setShow] = useState(false);
    const [userName, setUserName] = useState('');
    const [room, setRoom] = useState('');
    const [chatRoute, setChatRoute] = useState(false);
    const [messages, setMessage] = useState([]);
    
    useEffect(() => {
        socket = io(ENDPOINT);
        socket.on("message", function(message) {
            setMessage(oldMessage => [ ...oldMessage, message ]);
        });        

    }, [ENDPOINT]);
    
    const changeRoute = () => {
        setChatRoute(true);
        setShow(!show);
    };

    const handleExit = () => {
        if(room) {
            socket.emit("disconnected");
        }
        setChatRoute(false);
    };

    const emitRoom = (data) => {
        let username = data.username;
        let room = data.room;
        setRoom(room);
        socket.emit("room", { username, room });
    }

    const handleUserMessage = (message) => {
        if(message) {
            socket.emit("chatMessage", message);
        }
    };


    return (
        <ChatContext.Provider value={{
            handleUserMessage,
            handleExit,
            changeRoute,
            setUserName,
            emitRoom,
            setShow,
            setMessage,
            chatRoute,
            userName,
            messages,
            room,
            show
        }}>
            {props.children}
        </ChatContext.Provider>
    );
}

export default ChatContextProvider;