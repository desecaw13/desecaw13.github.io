"use strict";

// evil.css
let styleLink = document.getElementById("eCSS");
function evilFlip() {
    let checkBox = document.getElementById("eCB");
    if (checkBox.checked) { styleLink.disabled = false; }
    else { styleLink.disabled = true; };
}

/*setInterval(function () {
    document.body.style.background = "linear - gradient(#ccc, #777);" // todo change
}, 1000);*/
