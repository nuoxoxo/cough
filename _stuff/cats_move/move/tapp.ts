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

let wahou: HTMLElement[]

window.onload = () => {
    let ctn: HTMLElement = document.querySelector('.container')    
    let len = a.length
    let res = ''
    let i = -1
    while (++i < len) {
        res += '<div id=\'wahou\' class=\'waooo\'></div>'
    }
    ctn.innerHTML = res

    doSomething()

    // wahou = document.getElementsByClassName('waooo')
    // wahou = [...document.getElementsByClassName('waooo')]

    // Important line:
    wahou = Array.from(document.getElementsByClassName('waooo')) as HTMLElement[]
    for (let elem of wahou) {
        elem.onclick = doSomething
    }
}


function doSomething () {

    for (let elem of wahou) {
        elem.innerText = a[Math.floor(Math.random() * a.length)]
        let R = Math.floor(Math.random() * 251)
        let G = Math.floor(Math.random() * 251)
        let B = Math.floor(Math.random() * 251)
        elem.style.color = 'rgb(' + R + ',' + G + ',' + B + ')'
    }
}
