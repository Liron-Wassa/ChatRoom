import React, { useState, createContext, useEffect } from 'react';
import io from 'socket.io-client';

let socket;

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
    
    const ENDPOINT = "http://localhost:5000";
    const [show, setShow] = useState(false);
    const [userName, setUserName] = useState('');
    const [room, setRoom] = useState('');
    const [typing, setTyping] = useState('');
    const [chatRoute, setChatRoute] = useState(false);
    const [messages, setMessage] = useState([]);
    const [usersRoom, setUsersRoom] = useState([]);
    
    useEffect(() => {

        console.log("componentDidUpdate: [ChatContext.js]");
        
        socket = io(ENDPOINT);
        socket.on("message", function(message) {            
            setMessage(oldMessage => [ ...oldMessage, message ]);
            setTyping('');
        });        

        socket.on("typing", function(message) {
            setTyping(message);
        });

        socket.on("untyping", function() {
            setTyping('');
        });

        socket.on("roomUsers", function(data) {
            console.log(data); 
            setUsersRoom(data);
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
    };

    const handleUserMessage = (message) => {
        if(message) {
            socket.emit("chatMessage", message);
        }
    };

    const handleTyping = (type) => {
        if(type === "TYPING") {
            socket.emit("typing");
        }
        else if (type === "UNTYPING") {
            socket.emit("untyping");
        }
    };

    const updateRoom = () => {
        socket.emit("disconnected");
        // socket.emit("roomUsers");
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
            handleTyping,
            setTyping,
            updateRoom,
            setRoom,
            typing, 
            chatRoute,
            userName,
            messages,
            usersRoom,
            room,
            show
        }}>
            {props.children}
        </ChatContext.Provider>
    );
}

export default ChatContextProvider;