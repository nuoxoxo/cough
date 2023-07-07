let count:number = 0
const value = document.querySelector("#value") as HTMLElement
const btns = document.querySelectorAll(".btn-counter")


//  nav bar selection
let nav_toggle = document.querySelector('.nav-toggle')
let nav_links = document.querySelector('.nav-links')
let nav_links_a = Array.from(document.querySelectorAll('.nav-links li a'))


// below: modified from color-flipper

let button_flipper = document.getElementById('btn-flipper')
let color = document.querySelector('.color') as HTMLElement

window.onload = function () {
  let res = colorRgbHexPair()
  document.body.style.backgroundColor = res[1]

  // nav bar links--li--a coloring
  nav_links_a.forEach((a: HTMLElement) => {
    a.style.color = invertColorHex(res[1])
  })
}


button_flipper.addEventListener('click', () => {
  let res = colorRgbHexPair()
  document.body.style.backgroundColor = res[1]
  console.log(res)

  // nav bar links--li--a coloring
  nav_links_a.forEach((a: HTMLElement) => {
    a.style.color = invertColorHex(res[1])
    // console.log(a.style.color)
  })
})


function colorRgbHexPair() {
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

//  nav bar functionality
nav_toggle.addEventListener('click', () => {
  nav_links.classList.toggle('nav-links-show')
})


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


// strrev

function strrev() {
  let strToVeRev = document.getElementById('str-to-be-rev') as HTMLInputElement
  let line = strToVeRev.value
  let res = line.split('').reverse().join('')
  document.getElementById('str-reversed').textContent = res
}


export {}
