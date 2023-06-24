const g_cols = 100
const g_rows = 42
let g_grid = []
let g_charset = '@#$%&?¬πø¥†®©∑œ∂ßµ∆≤∫çƒ♠♣♥♦♧♤♢♡♫♬✪✯✰'
let g_symbol = g_charset[Math.floor(Math.random() * g_charset.length)]

window.onload = () => {
    let ctn = document.querySelector('.container')
    let res = ''
    let i = -1
    while (++i < g_rows) {
        let cells = ''
        let row = []
        let j = -1
        while (++j < g_cols) {
            let chr
            if (Math.random() >= 0.4) {
                chr = g_symbol
                cells += chr
                row.push(chr)
            } else {
                chr = '.'
                cells += chr
                row.push(chr)
            }
            if (j ^ g_cols - 1) {
                cells += ' '
            }
        }
        let rowId = 'row-' + i // ...
        res += '<div id=\'' + rowId + '\' class=\'rows\'>' + cells + '</div>'
        g_grid.push(row)
    }
    ctn.innerHTML = res
    ctn.onclick = start_automaton
}

function start_automaton() {
    // requestAnimationFrame(iterate_automaton)
    
    // ver 1 : sim accelerates on click
    iterate_automaton ()

    // ver 2 : does not accelerates
    if (!animationRequestId) {
        iterate_automaton()
    }
}

// function iterate_automaton() {
async function iterate_automaton() {
    iteration()
    let ctn = document.querySelector('.container')
    let i = -1
    while (++i < g_rows) {
        let rowId = 'row-' + i
        let row = document.getElementById(rowId)
        row.innerText = g_grid[i].join(' ')
    }
    // requestAnimationFrame(iterate_automaton)

    await delay(42)
    requestAnimationFrame(iterate_automaton)
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

function iteration() {
    let g = []
    let r = -1, c
    while (++r < g_rows) {
        let tmp = []
        c = -1
        while (++c < g_cols) {
            let n = count_neighbors(r, c)
            if (g_grid[r][c] === '.') {
                if (n === 3) {
                    tmp.push(g_symbol)
                } else {
                    tmp.push('.')
                }
                continue
            }
            if ([2, 3].includes(n)) {
                tmp.push(g_symbol)
            } else {
                tmp.push('.')
            }
        }
        g.push(tmp)
    }
    g_grid = g.map(function(a) {
        return a.slice()
    })
}

function count_neighbors(R, C) {
    let dir = [-1, 0, 1]
    let res = 0, r, c
    for (let a of dir) {
        for (let b of dir) {
            if (a === 0 && b === 0) {
                continue
            }
            r = (R + a + g_rows) % g_rows
            c = (C + b + g_cols) % g_cols
            if (g_grid[r][c] === g_symbol) {
                ++res
            }
        }
    }
    return res
}