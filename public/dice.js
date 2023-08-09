const socket = io();


var rollBtn = document.getElementById("roll-btn");
rollBtn.addEventListener("click", function () {
    let sound = new Audio("roll.wav");
    sound.play();
    socket.emit("roll")
})


function displayDie(v) {
    // Displays the die's value, represented by v.
    let d = document.getElementById("d");
    d.innerText = v;
} // End function.


socket.on("finnish", (num) => {
    displayDie(num);
})