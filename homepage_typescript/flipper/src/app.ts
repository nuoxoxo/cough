const button = document.getElementById('btn-flipper') as HTMLButtonElement;
const color = document.querySelector('.color') as HTMLSpanElement;

window.onload = function() {
  const res = colorPair();
  document.body.style.backgroundColor = res[1];
  color.textContent = res[1].toString()
};

button.addEventListener('click', () => {
  const res = colorPair();
  document.body.style.backgroundColor = res[1];
  color.textContent = res[1].toString()
  console.log(res);
});

function colorPair(): [string, string] {
  const r: number = Math.floor(Math.random() * 256);
  const g: number = Math.floor(Math.random() * 256);
  const b: number = Math.floor(Math.random() * 256);
  const res0: string = `rgba(${r}, ${g}, ${b})`;
  const res1: string = rgbToHex(r, g, b).toUpperCase();
  return [res0, res1];
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + intToHex(r) + intToHex(g) + intToHex(b);
}

function intToHex(code: number): string {
  let hex: string = code.toString(16);
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

export {}