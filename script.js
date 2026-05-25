const button = document.getElementById("startBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.innerHTML = "Welcome! Product Management System is ready to use.";
});