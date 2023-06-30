const button = document.getElementById('btn-flipper') as HTMLButtonElement
const color = document.querySelector('.color') as HTMLSpanElement


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


window.onload = function() {
  const res = colorRgbHexPair()
  document.body.style.backgroundColor = res[1]
  color.textContent = res[1]

  // nav bar links--li--a coloring
  nav_links_a.forEach((a: HTMLElement) => {
    a.style.color = invertColorHex(res[1])
  })
}


button.addEventListener('click', () => {
  const res = colorRgbHexPair()
  document.body.style.backgroundColor = res[1]
  color.textContent = res[1]
  console.log(res)

  // nav bar links--li--a coloring
  nav_links_a.forEach((a: HTMLElement) => {
    a.style.color = invertColorHex(res[1])
    // console.log(a.style.color)
  })
})


function colorRgbHexPair(): [string, string] {
  const r: number = Math.floor(Math.random() * 256)
  const g: number = Math.floor(Math.random() * 256)
  const b: number = Math.floor(Math.random() * 256)
  const res0: string = `rgba(${r}, ${g}, ${b})`
  const res1: string = rgbToHex(r, g, b).toUpperCase()
  return [res0, res1]
}


function rgbToHex(r: number, g: number, b: number): string {
  return "#" + intToHex(r) + intToHex(g) + intToHex(b)
}


function intToHex(code: number): string {
  let hex: string = code.toString(16)
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


export {}
