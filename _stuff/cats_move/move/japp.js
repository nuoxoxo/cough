let a = [
    'yncvpaveC rY',
    'syrflZ sb xpvF',
    'flnQ tavaehO',
    '! hbunJ',
    'rtnvenz gvgrc gvgrc ghbg regbA',
    'vznzH',
    'vbz gr reèc abZ',
    "anpvgnI hq rgfvpebkr'Y",
    'leenO rq raanrW',
    "fgêebS fry gr ehbzN'Y",
    'anyvZ à gvha reèvaerQ',
    'anzlrtbbO ruG'
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

/*
// console.log(a)
let i = -1
while (++i < a.length) {
    let res = ''
    let j = -1
    let ascii
    let ascii_A = 'A'.charCodeAt(0)
    let ascii_Z = 'Z'.charCodeAt(0)
    let ascii_a = 'a'.charCodeAt(0)
    let ascii_z = 'z'.charCodeAt(0)
    while (++j < a[i].length) {

        // Upper
        if (a[i].charCodeAt(j) >= ascii_A && a[i].charCodeAt(j) <= ascii_Z) {
            ascii = a[i].charCodeAt(j) + 13
            if (ascii > ascii_Z) {
                ascii -= 26
            }
            res += String.fromCharCode(ascii)
        // Lower
        } else if (a[i].charCodeAt(j) >= ascii_a && a[i].charCodeAt(j) <= ascii_z) {
            ascii = a[i].charCodeAt(j) + 13
            if (ascii > ascii_z) {
                ascii -= 26
            }
            res += String.fromCharCode(ascii)
        // non alnum
        } else {
            res += a[i][j]
        }
    }
    a[i] = res
}
// console.log(a)
*/
