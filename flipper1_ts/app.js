var button = document.getElementById('btn');
var color = document.querySelector('.color');
window.onload = function () {
    var res = colorPair();
    document.body.style.backgroundColor = res[1];
    color.textContent = res[1];
};
button.addEventListener('click', function () {
    var res = colorPair();
    document.body.style.backgroundColor = res[1];
    color.textContent = res[1];
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
/*
let button = document.getElementById('btn')
let color = document.querySelector('.color')

window.onload = function() {
  let res = colorPair()
  document.body.style.backgroundColor = res[1]
  color.textContent = res[1]
}

button.addEventListener('click', () => {
  let res = colorPair()
  document.body.style.backgroundColor = res[1]
  color.textContent = res[1]
  console.log(res)
})

function colorPair() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let res0 = `rgba(${r}, ${g}, ${b})`
  let res1 = rgbToHex(r, g, b).toUpperCase()
  return [res0, res1]
}

function rgbToHex(r, g, b) {
  return "#" + intToHex(r) + intToHex(g) + intToHex(b);
}

function intToHex(code) {
  let hex = code.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
*/
