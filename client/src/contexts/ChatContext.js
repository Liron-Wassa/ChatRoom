import React, { useState, createContext } from 'react';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:5000");

export const ChatContxet = createContext();

const ChatContxetProvider = (props) => {
    
    const [greeting, setGreeting] = useState('');
    const [name, setName] = useState('');

    socket.on("message", function(message) {
        setGreeting(message);
    });

    const emitName = (name) => {
        if(name) {
            setName(name);
            socket.emit("name", name);
        }
    };

    return (
        <ChatContxet.Provider value={{
            greeting,
            emitName,
            name
        }}>
            {props.children}
        </ChatContxet.Provider>
    );
}

export default ChatContxetProvider;