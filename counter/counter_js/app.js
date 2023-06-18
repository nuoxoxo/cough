let count = 0;
const val = document.querySelector("#value");
const btns = document.querySelectorAll(".btn-counter");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log(btn)
    const styles = e.currentTarget.classList;
    if (styles.contains("btn-minus")) {
      --count
    } else if (styles.contains("btn-plus")) {
      ++count
    } else if (styles.contains("btn-minus-10")) {
      count -= 10
    } else if (styles.contains("btn-plus-10")) {
      count += 10
    } else {
      count = 0;
    }

    value.textContent = count;
  })
})


// below: modified from color-flipper

let button_flipper = document.getElementById('btn-flipper')
let color = document.querySelector('.color')

window.onload = function() {
  let res = colorPair()
  document.body.style.backgroundColor = res[1]
}

button_flipper.addEventListener('click', () => {
  let res = colorPair()
  document.body.style.backgroundColor = res[1]
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

