const input_pwd = document.querySelector("#password");
const input_confirm_pwd = document.querySelector("#confirm_password");
const btn = document.querySelector(".btn");
const password_container = document.querySelector(".password-container");
/* const err_msg = document.querySelector(".err-msg");*/

function validate_pwd() {
    input_pwd.classList.remove("error");
    input_confirm_pwd.classList.remove("error");
    if (input_pwd.value !== input_confirm_pwd.value) {
        console.log("Passwords do not match");
        /* input_pwd.style.borderColor = "red"*/;
        /* input_confirm_pwd.style.borderColor = "red"*/;
        if (!input_pwd.classList.contains("error")) {
            input_pwd.classList.add("error");
            input_confirm_pwd.classList.add("error");
        }

        /* Create the error message div and add to the document */
        if (!document.querySelector(".err-msg")) {
            err_msg = document.createElement("div");
            err_msg.classList.toggle("err-msg");
            err_msg.innerHTML = '<span aria-label="required">*</span>Passwords do not match'
            password_container.appendChild(err_msg);
        }
    }
    else {
        if (err_msg) {
            err_msg.remove();
        }
    }
};

function clear_forms() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.value = '';
    });
}

btn.addEventListener("click", validate_pwd);
