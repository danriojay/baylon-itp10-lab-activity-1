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
    messageArea.textContent = "Enter your name and select an action.";
    document.body.style.backgroundColor = "#f3f4f6";

    console.log("Page reset.");
}

function showMouseoverMessage() {
    console.log("The mouse is over the greeting button.");
}

greetingButton.addEventListener("click", displayGreeting);
backgroundButton.addEventListener("click", changeBackground);
resetButton.addEventListener("click", resetPage);
nameInput.addEventListener("input", showTypedText);
greetingButton.addEventListener("mouseover", showMouseoverMessage);

console.log("JavaScript file loaded successfully.");