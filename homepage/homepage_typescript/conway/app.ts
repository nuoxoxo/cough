const g_cols = 100
const g_rows = 42
let g_grid = []
let g_charset = '@#$%&?¬πø¥†®©∑œ∂ßµ∆≤∫çƒ♠♣♥♦♧♤♢♡♫♬✪✯✰♭♮♯'
let g_symbol = g_charset[Math.floor(Math.random() * g_charset.length)]
let g_hollow = '_'


// in JS, animationRequestId is pre-defined
let animationRequestId: number | null = null


window.onload = () => {
    let clr = colorPair()[1]

    console.log(clr, clr.toString())

    document.body.style.backgroundColor = clr.toString()
    let ctn: HTMLElement = document.querySelector('.container-conway')
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
                chr = g_hollow
                cells += chr
                row.push(chr)
            }
            if (j ^ g_cols - 1) {
                cells += ' '
            }
        }
        let rowId = 'row-' + i
        res += '<div id=\'' + rowId + '\' class=\'rows\'>' + cells + '</div>'
        g_grid.push(row)
    }
    ctn.innerHTML = res
    ctn.onclick = start_automaton
}


function start_automaton() {    
    // ver 1 : sim accelerates on click

    // iterate_automaton ()


    // ver 2 : does not accelerates

    if (!animationRequestId) {
        iterate_automaton()
    }
}


async function iterate_automaton() {
    iteration()
    let ctn = document.querySelector('.container')
    let i = -1
    while (++i < g_rows) {
        let rowId = 'row-' + i
        let row = document.getElementById(rowId)
        row.innerText = g_grid[i].join(' ')
    }

    await new Promise(
        (resolve) => setTimeout(resolve, 42)
    )
    requestAnimationFrame(iterate_automaton)
}


function iteration() {
    let g = []
    let r = -1, c
    while (++r < g_rows) {
        let tmp = []
        c = -1
        while (++c < g_cols) {

            let n = count_neighbors(r, c)
            if (g_grid[r][c] === g_hollow) {
                if (n === 3) {
                    tmp.push(g_symbol)
                } else {
                    tmp.push(g_hollow)
                }
                continue

            } else if (g_grid[r][c] === g_symbol) {

                if ([2, 3].includes(n)) {
                    tmp.push(g_symbol)
                } else {
                    tmp.push(g_hollow)
                }
            } else {
                tmp.push(g_grid[r][c])
            }
        }
        g.push(tmp)
    }


    // vitality hack : one cell flip in each iter

    let x = Math.floor(Math.random() * g_rows)
    let y = Math.floor(Math.random() * g_cols)
    g[x][y] = g_grid[x][y] === g_hollow ? g_symbol : g_hollow
    // console.log(x, y, g[x][y])


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


//  flip background color + change cell to an inverted color


let button_flipper = document.getElementById('btn-flipper')
let color = document.querySelector('.color') as HTMLElement

button_flipper.addEventListener('click', () => {
  let res = colorPair()
  console.log(res[1], res[1].toString())
  document.body.style.backgroundColor = res[1].toString()

  // invert cell color
  let ctn: HTMLElement = document.querySelector('.container-conway')
  ctn.style.color = invertColorHex(res[1].toString())

  // console.log(res)

})

function colorPair() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let res0 = `rgba(${r}, ${g}, ${b})`
  let res1 = rgbToHexStr(r, g, b).toUpperCase()
  let res2:number[] = [r, g, b]
  return [res0, res1, res2]
}


function rgbToHexStr(r: number, g: number, b: number) {
  return "#" + intToHex(r) + intToHex(g) + intToHex(b)
}

function intToHex(code: number) {
  let hex = code.toString(16)
  return hex.length === 1 ? "0" + hex : hex
}

function invertColorHex(hex) {
    const color = hex.startsWith("#") ? hex.slice(1) : hex;
    const max = 255;
    const r = max - parseInt(color.substr(0, 2), 16);
    const g = max - parseInt(color.substr(2, 2), 16);
    const b = max - parseInt(color.substr(4, 2), 16);
    const res = "#" + [r, g, b].map(c => c.toString(16).padStart(2, "0")).join("");
    return res;
  }
  
  
  

// export {}