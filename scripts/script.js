
const app = {}

// https://codepen.io/eclarrrk/pen/ZZywZv

app.copyEmail = function() {
    const textToCopy = "matt-hope@outlook.com";
    const placeholder = document.createElement("input");
    document.body.appendChild(placeholder);
    placeholder.setAttribute('value', textToCopy);
    placeholder.select();
    document.execCommand("Copy");
    console.log("Copied");
    document.body.removeChild(placeholder);
}
