"use strict";
let signUpBtn = document.getElementById("sign-up");
let logInBtn = document.getElementById("login");
signUpBtn.addEventListener("click", () => {
    window.location.href = 'Signup.html';
});
logInBtn.addEventListener("click", () => {
    window.location.href = 'login.html';
});
