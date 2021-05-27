"use strict";

// evil.css
let styleLink = document.getElementById("eCSS");
function evilFlip() {
    let checkBox = document.getElementById("eCB");
    if (checkBox.checked) { styleLink.disabled = false; }
    else { styleLink.disabled = true; };
}
