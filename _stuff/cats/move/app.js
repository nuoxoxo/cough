let a = [
"Le Principal",
"Sick of Myself",
"Burning Days",
"Wahou !",
"Notre tout petit petit mariage",
"Umami",
"Mon père et moi",
"L'exorciste du Vatican",
"Jeanne de Barry",
"L'Amour et les Forêts",
"Dernière nuit à Milan",
"The Boogeyman"
]
let wahou = document.getElementsByClassName('waooo')
for (let elem of wahou) {
elem.onclick = doSomething
}
function doSomething () {
for (let elem of wahou) {
elem.innerText = a[Math.floor(Math.random() * a.length)]
console.log(elem.style, elem.style.color)
let R = Math.floor(Math.random() * 251)
let G = Math.floor(Math.random() * 251)
let B = Math.floor(Math.random() * 251)
elem.style.color = 'rgb(' + R + ',' + G + ',' + B + ')'
}
}
window.onload = () => {
doSomething()
}