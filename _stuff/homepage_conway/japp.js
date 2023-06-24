const W = 42
const H = W
let G = []

window.onload = () => {
    document.body.style.backgroundColor = "black"
    let ctn = document.querySelector('.container')
    let res = ''
    let i = -1
    while (++i < H) {
        let cells = ''
        let row = []
        let j = -1
        while (++j < W) {
            let chr
            if (Math.random() >= .4) {
                chr = '@'
                cells += chr
                row.push(chr)
            } else {
                chr = '.'
                cells += chr
                row.push(chr)
            }
            if (j ^ W - 1) {
                cells += ' '
            }
        }
        res += '<div id=\'rows\' class=\'rows\'>' + cells + '</div>'
        G.push(row)
    }
    ctn.innerHTML = res
    console.log(G)
    // automaton ()
}


// function automaton () {

// }

// // -------------------

// printer(g)
// game(g, w)

// function game(g, w) {
//     setTimeout(function () {
//         let gg = []
//         let r = -1, c
//         while (++r < w) {
//             let tmp = []
//             c = -1
//             while (++c < w) {
//                 let n = count_neighbors(g, r, c, w)
//                 if (g[r][c] == '.') {
//                     if (n == 3) {
//                         tmp.push('#')
//                     } else {
//                         tmp.push('.')
//                     }
//                     continue
//                 }
//                 if ([2, 3].includes(n)) {
//                     tmp.push('#')
//                 } else {
//                     tmp.push('.')
//                 }
//             }
//             gg.push(tmp)
//         }
//         g = gg.map(function (a) { return a.slice() })
//         printer(g)
//         game(g, w)
//     }, 100)
// }
// function count_neighbors(g, R, C, w) {
//     let dir = [-1, 0, 1]
//     let res = 0, r, c
//     for (let a of dir) {
//         for (let b of dir) {
//             if (a == b && a == 0) {
//                 continue
//             }
//             r = R + a
//             c = C + b

//             // console.log(r, c)

//             if (r < 0) {
//                 r = w - 1
//             } else if (r > w - 1) {
//                 r = 0
//             }

//             if (c < 0) {
//                 c = w - 1
//             } else if (c > w - 1) {
//                 c = 0
//             }
//             if (g[r][c] == '#') {
//                 ++res
//             }
//         }
//     }
//     return res
// }

// function printer(g) {
//     for (let line of g) {
//         console.log(line.join(' '))
//     }
//     console.log()
// }
