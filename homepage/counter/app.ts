let count:number = 0
const value = document.querySelector("#value") as HTMLElement
const btns = document.querySelectorAll(".btn-counter")

//  nav bar selection
let nav_toggle = document.querySelector('.nav-toggle')
let nav_links = document.querySelector('.nav-links')
let nav_links_a = Array.from(document.querySelectorAll('.nav-links li a'))
// nav_links_a.forEach((a: HTMLElement) => {
//   console.log(a.style.color)
//   console.log(window.getComputedStyle(document.body).backgroundColor[1])
//   a.style.color = invertColorHex(window.getComputedStyle(document.body).backgroundColor[1])
//   console.log(a.style.color)
// })

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log(btn)
    const styles = (e.currentTarget as HTMLElement).classList
    if (styles.contains("btn-minus")) {
      --count
    } else if (styles.contains("btn-plus")) {
      ++count
    } else if (styles.contains("btn-minus-10")) {
      count -= 10
    } else if (styles.contains("btn-plus-10")) {
      count += 10
    } else {
      count = 0
    }

    // value.textContent = count
    value.textContent = count.toString()
  })
})


// below: modified from color-flipper

let button_flipper = document.getElementById('btn-flipper')
let color = document.querySelector('.color') as HTMLElement

window.onload = function () {
  let res = colorPair()
  document.body.style.backgroundColor = res[1]

  // nav bar links--li--a coloring
  nav_links_a.forEach((a: HTMLElement) => {
    a.style.color = invertColorHex(res[1])
  })
}

button_flipper.addEventListener('click', () => {
  let res = colorPair()
  document.body.style.backgroundColor = res[1]
  console.log(res)

  // nav bar links--li--a coloring
  nav_links_a.forEach((a: HTMLElement) => {
    a.style.color = invertColorHex(res[1])
    // console.log(a.style.color)
  })
})

function colorPair() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let res0 = `rgba(${r}, ${g}, ${b})`
  let res1 = rgbToHex(r, g, b).toUpperCase()
  return [res0, res1]
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + intToHex(r) + intToHex(g) + intToHex(b)
}

function intToHex(code: number) {
  let hex = code.toString(16)
  return hex.length === 1 ? "0" + hex : hex
}

// need the following func from Conway for nav bar links-a coloring
function invertColorHex(hex) {
  const color = hex.startsWith("#") ? hex.slice(1) : hex
  const max = 255
  const r = max - parseInt(color.substr(0, 2), 16)
  const g = max - parseInt(color.substr(2, 2), 16)
  const b = max - parseInt(color.substr(4, 2), 16)
  const res = "#" + [r, g, b].map(c => c.toString(16).padStart(2, "0")).join("")
  return res
}

export {}