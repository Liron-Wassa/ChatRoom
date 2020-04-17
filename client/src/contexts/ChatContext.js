import React, { useState, createContext, useEffect } from 'react';
import io from 'socket.io-client';

// const socket = io.connect("http://localhost:5000");
let socket;

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
    
    const ENDPOINT = "http://localhost:5000";
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');

    // socket.on("setId", function(id) {
    //     console.log(id);
    // });

    
    useEffect(() => {
        
        socket = io(ENDPOINT);
        
        console.log(socket);
        
        socket.on("message", function(message) {
            console.log(message);            
        });
        
    }, [ENDPOINT]);
    
    const emitName = (name) => {
        if(name) {
            setName(name);
            setShow(!show);
            socket.emit("setName", name);
        }
    };


    const handleExit = () => {
        socket.emit("disconnected", name);
        setName('');
    };

    return (
        <ChatContext.Provider value={{
            handleExit,
            emitName,
            setShow,
            name,
            show
        }}>
            {props.children}
        </ChatContext.Provider>
    );
}

export default ChatContextProvider;