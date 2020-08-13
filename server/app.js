const { userJoin, getCurrentUser, userLeave, getUsersRoom } = require("./utils/users");
const formatMessage = require("./utils/messages");
const socket = require("socket.io");
const express = require("express");
const path = require('path');
const app = express();

const botName = "ChatBot";

if (process.env.NODE_ENV === "production") {

    const root = path.join(__dirname, "..", 'client', 'build');

    app.use(express.static(root));

    app.get("*", (req, res) => {

      res.sendFile('index.html', { root });
    });
};

// Socket setup
const server = app.listen(5000, function(){
    console.log("server has running"); 
});

const io = socket(server);

io.on("connection", function(socket) {

    console.log("connect");
    
    socket.on("room", function({ username, room }) {

        const user = userJoin(socket.id, username, room);
        
        socket.join(user.room);

        socket.emit("message", formatMessage(botName, "Welcome to PartyChat"));

        socket.broadcast.to(user.room).emit("message", formatMessage(botName, `${user.username}: has joined to room`));
        io.to(user.room).emit("roomUsers", getUsersRoom(user.room));
    });

    socket.on("chatMessage", function(message) {        
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit("message", formatMessage(user.username, message));        
    });

    socket.on("typing", function() {
        const user = getCurrentUser(socket.id);
        socket.broadcast.to(user.room).emit("typing", `${user.username} is typing...`);
    });

    socket.on("untyping", function() {
        const user = getCurrentUser(socket.id);
        socket.broadcast.to(user.room).emit("untyping");
    });

    socket.on("disconnected", function() {    
        const user = userLeave(socket.id);
        if(user) {
            socket.leave(user.room);
            socket.broadcast.to(user.room).emit("message", formatMessage(botName, `${user.username}: has left the room`));
            io.to(user.room).emit("roomUsers", getUsersRoom(user.room));
        }
    });

    socket.on("disconnect", function() {
        const user = userLeave(socket.id);        
        if(user) {
            socket.leave(user.room);
            socket.broadcast.to(user.room).emit("message", formatMessage(botName, `${user.username}: has left the room`));
            io.to(user.room).emit("roomUsers", getUsersRoom(user.room));
        }
    });
});