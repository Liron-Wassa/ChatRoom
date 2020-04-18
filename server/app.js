const { userJoin, getCurrentUser } = require("./utils/users");
const formatMessage = require("./utils/messages");
const socket = require("socket.io");
const express = require("express");
const app = express();

const botName = "chatRoom";

// Socket setup
const server = app.listen(5000, function(){
    console.log("server has running"); 
});

const io = socket(server);

io.on("connection", function(socket) {

    console.log("connect");
    
    socket.on("room", function({ username, room }) {

        console.log( username, room );

        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        socket.emit("message", formatMessage(botName, "Welcome to ChatRoom"));

        socket.broadcast.to(user.room).emit("message", formatMessage(botName, `${user.username}: has joined to room`));

    });

    socket.on("chatMessage", function(message) {        
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit("message", formatMessage(user.username, message));        
    });

    // socket.on("disconnect", function() {
    //     if(!name) {
    //         io.emit("message", `${name} has left the room`);
    //         console.log(name, "Bye Bye");
    //     }
    // });

    socket.on("disconnected", function() {    
        const user = getCurrentUser(socket.id);
    
        socket.to(user.room).emit("message", formatMessage(botName, `${user.username}: has left the room`));
    });
});