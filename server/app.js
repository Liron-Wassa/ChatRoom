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
    
    // socket.emit("setId", socket.id);

    socket.on("setName", function(name) {
        console.log(socket.id, name);
        socket.broadcast.emit("message", `${name} on the Loby`);
    });

    // socket.on("disconnect", function() {
    //     if(!name) {
    //         io.emit("message", `${name} has left the room`);
    //         console.log(name, "Bye Bye");
    //     }
    // });

    socket.on("disconnected", function(name) {        
        socket.broadcast.emit("message", `${name} has left the room`);
        console.log(socket.id, name, "Bye Bye");
    });
});