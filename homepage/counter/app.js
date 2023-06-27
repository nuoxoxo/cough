"use strict";
exports.__esModule = true;
var count = 0;
var value = document.querySelector("#value");
var btns = document.querySelectorAll(".btn-counter");
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        console.log(btn);
        var styles = e.currentTarget.classList;
        if (styles.contains("btn-minus")) {
            --count;
        }
        else if (styles.contains("btn-plus")) {
            ++count;
        }
        else if (styles.contains("btn-minus-10")) {
            count -= 10;
        }
        else if (styles.contains("btn-plus-10")) {
            count += 10;
        }
        else {
            count = 0;
        }
        // value.textContent = count
        value.textContent = count.toString();
    });
});
// below: modified from color-flipper
var button_flipper = document.getElementById('btn-flipper');
var color = document.querySelector('.color');
window.onload = function () {
    var res = colorPair();
    document.body.style.backgroundColor = res[1];
};
button_flipper.addEventListener('click', function () {
    var res = colorPair();
    document.body.style.backgroundColor = res[1];
    console.log(res);
});
function colorPair() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var res0 = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ")");
    var res1 = rgbToHex(r, g, b).toUpperCase();
    return [res0, res1];
}
function rgbToHex(r, g, b) {
    return "#" + intToHex(r) + intToHex(g) + intToHex(b);
}
function intToHex(code) {
    var hex = code.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
