
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

const button = document.getElementById('copy-email-icon');

button.addEventListener('click', () =>{
    // app.copyEmail();
    myFunction();
});


function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}