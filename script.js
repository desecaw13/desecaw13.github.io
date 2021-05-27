"use strict";

// evil.css
let styleLink = document.getElementById("eCSS");
function evilFlip() {
    let checkBox = document.getElementById("eCB");
    if (checkBox.checked) { styleLink.disabled = false; }
    else { styleLink.disabled = true; };
}

// background animation (todo 'breathing' effect)
let gtop = 191;
let gbot = 64;
let i = 1;
setInterval(function () {
    if (gtop >= 255) { i = -1 } else if (gtop <= 0) { i = 1 };
    if (gbot <= 0) { i = -1 } else if (gbot >= 255) { i = 1 };
    document.body.style.background = `linear-gradient(rgb(${gtop},${gtop},${gtop}), rgb(${gbot},${gbot},${gbot}))`;
    gtop += i;
    gbot -= i;
}, 100);
