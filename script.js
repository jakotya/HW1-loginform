const credentials = {
    login: "admin",
    password: "qwerty",
};

let button = document.querySelector(".form__button")
button.addEventListener("click",checkInput)

function checkInput() {
    let login = document.getElementById("login")
    let password = document.getElementById("password")
    let message = document.querySelector(".form__message")
    if (login.value === credentials.login && password.value === credentials.password) {
            message.innerHTML = "Congrats";
            message.style.display = "block";
            message.style.color = "#4bb544";
        } else {
            messageError.innerHTML = "Wrong";
            messageError.style.display = "block";
            message.style.color = "#cc3333";
        }
    }
