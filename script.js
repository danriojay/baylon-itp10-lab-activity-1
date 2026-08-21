const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");

function displayGreeting() {
    const userName = nameInput.value.trim();

    if (userName === "") {
        messageArea.textContent = "Please enter your name.";
    } else {
        mainHeading.textContent = "Hello, " + userName + "!";
        messageArea.textContent = "Greeting displayed successfully.";
    }

    console.log("Greeting button clicked.");
}

function showTypedText() {
    messageArea.textContent = "You are typing: " + nameInput.value;
}

function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
    messageArea.textContent = "Background color changed.";

    console.log("Background color changed.");
}

function resetPage() {
    mainHeading.textContent = "Basic Event-Driven Webpage";
    nameInput.value = "";
    messageArea.textContent = "";
    document.body.style.backgroundColor = "#f3f4f6";

    console.log("Page reset.");
}

function showMouseoverMessage() {
    console.log("The mouse is over the greeting button.");
}

// Event source: greetingButton
// Event listener: click
// Event handler: displayGreeting
greetingButton.addEventListener("click", displayGreeting);

// Event source: backgroundButton
// Event listener: click
// Event handler: changeBackground
backgroundButton.addEventListener("click", changeBackground);

// Event source: resetButton
// Event listener: click
// Event handler: resetPage
resetButton.addEventListener("click", resetPage);

// Event source: nameInput
// Event listener: input
// Event handler: showTypedText
nameInput.addEventListener("input", showTypedText);

// Event source: greetingButton
// Event listener: mouseover
// Event handler: showMouseoverMessage
greetingButton.addEventListener("mouseover", showMouseoverMessage);

console.log("JavaScript file loaded successfully.");