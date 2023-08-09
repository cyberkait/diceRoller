const socket = io();


var rollBtn = document.getElementById("roll-btn");
rollBtn.addEventListener("click", function () { socket.emit("roll") })


function displayDie(v) {
    // Displays the die's value, represented by v.
    let dieDiv = document.getElementById("die-div");
    let d = document.getElementById("die");
    dieDiv.removeChild("die");
    let newDie = document.createElement("img")
    if (v == 1) {
        newDie.src = "images/d1.png";
    } // End if.
    else if (v == 2) {
        newDie.src = "images/d2.png";
    } // End else if #1.
    else if (v == 3) {
        newDie.src = "images/d3.png";
    } // End else if #2.
    else if (v == 4) {
        newDie.src = "images/d4.png";
    } // End else if #3.
    else if (v == 5) {
        newDie.src = "images/d5.png";
    } // End else if #4.
    else if (v == 6) {
        newDie.src = "images/d6.png"
    } // End else if #5.
    else {
        newDie.src = "images/d0.png";
    } // End else.
    if (isNaN(v)) {
        newDie.alt = "No value.";
    } // End if.
    else {
        newDie.alt = "Dice value is " + v + "."
    } // End else.
} // End function.


socket.on("finnish", (num) => {
    displayDie(num);
})