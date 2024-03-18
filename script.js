const input_pwd = document.querySelector("#password");
const input_confirm_pwd = document.querySelector("#confirm_password");
const btn = document.querySelector(".btn");
const err_msg = document.querySelector(".err-msg");

function validate_pwd() {
    if (input_pwd.value !== input_confirm_pwd.value) {
        console.log("Passwords do not match");
        /* input_pwd.style.borderColor = "red"*/;
        /* input_confirm_pwd.style.borderColor = "red"*/;
        input_pwd.classList.toggle("error");
        input_confirm_pwd.classList.toggle("error");
        err_msg.style.visibility = "visible"; 
    }
};

function clear_forms() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.value = '';
    });
}

btn.addEventListener("click", validate_pwd);
