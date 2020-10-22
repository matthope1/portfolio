
const app = {}

// https://codepen.io/eclarrrk/pen/ZZywZv

app.copyEmail = function() {
    const textToCopy = "matt-hope@outlook.com";
    const placeholder = document.createElement("input");
    document.body.appendChild(placeholder);
    placeholder.setAttribute('value', textToCopy);
    placeholder.select();
    document.execCommand("Copy");
    document.body.removeChild(placeholder);
}

const copyEmailButton = document.getElementById('copy-email-icon');

copyEmailButton.addEventListener('click', () =>{
    app.copyEmail();
});


