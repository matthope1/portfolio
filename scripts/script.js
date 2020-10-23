
const app = {}

// https://codepen.io/eclarrrk/pen/ZZywZv

app.copyEmail = function() {
    const textToCopy = "matt-hope@outlook.com";
    const placeholder = document.createElement("input");
    document.body.appendChild(placeholder);
    placeholder.setAttribute("value", textToCopy);
    placeholder.select();
    document.execCommand("Copy");
    document.body.removeChild(placeholder);
}

//TODO: change this so that we dont have to add EL
// to the email button and the email 

const copyEmailButton = document.getElementById("copy-email-icon");
const copyEmailMessage = document.getElementById("copy-email-message");
const email = document.getElementById("email");

copyEmailButton.addEventListener("click", () =>{
    app.copyEmail();
    copyEmailMessage.innerHTML = "Email copied!";
});

email.addEventListener("click", () =>{
    app.copyEmail();
    copyEmailMessage.innerHTML = "Email copied!";
});

copyEmailButton.addEventListener("mouseout", () => {
    copyEmailMessage.innerHTML = "Copy email";
});

email.addEventListener("mouseout", () => {
    copyEmailMessage.innerHTML = "Copy email";
});
