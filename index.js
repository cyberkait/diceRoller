// Imports
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
var socket = io;


// Setting up the server.
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public"));
io.on("connection", onConnection);
http.listen(port, () => console.log("Listening on port" + port));


function onConnection(socket) {
    console.log("A user has connected!");


    // Creating the dice roller.
    function getNum() {
        let n = Math.floor(Math.random() * 6);
        return n + 1;
    } //end function.


    socket.on("roll", function () {
        console.log("The roll button has been clicked.");
        let diceValue = getNum();
        socket.emit("finnish", diceValue);
    })
} // End function.

