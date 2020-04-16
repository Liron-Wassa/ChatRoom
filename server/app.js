const socket = require("socket.io");
const express = require("express");
const app = express();

// Socket setup
const server = app.listen(5000, function(){
    console.log("server has running"); 
});

const io = socket(server);

io.on("connection", function(socket) {

    console.log("connect");

    socket.emit("message", "Welcome to chatRoom");

    socket.on("name", function(name) {
        console.log(name);
    });
});