let count = 0;
let counterId = document.getElementById("counter");
let saveButton = document.getElementById("saveButton");
let saveHistory = document.getElementById("saveHistory");

function increment() {
    count = count + 1;
    counterId.innerText = count;
}

function decrement() {
    count = count - 1;
    if (count < 0) {
        count = 0;
    }
    counterId.innerText = count;
}

function reset() {
    count = 0;
    counterId.innerText = count;
}

function save() {
    let message;
    
    if (count === 0) {
        message = `Current count: ${count} - Nobody went inside`;
    }
    else if (count > 0) {
        message = `Current count: ${count} - People went inside`;
    } else {
        message = `Current count: ${count} - People went outside`;
    }

    // Clear previous messages and then append the new one.
    saveHistory.innerHTML = message + "<br>"; // this code will replace the previous message with the new message.
    // saveHistory.innerHTML += message + "<br>"; -----this code will append the new message to the previous message.
}

increment();
decrement();
reset();
save();
