"use strict";

var style = document.createElement("link");
style.disabled = true;
style.id = "evilcss";
style.type = "text/css";
style.rel = "stylesheet";
style.href = "https://rawgithub.com/tlrobinson/evil.css/master/evil.css";
document.head.appendChild(style);

function evilFlip() {
    let checkBox = document.getElementById("eCB");
    if (checkBox.checked) { style.disabled = false; }
    else { style.disabled = true; }
}
