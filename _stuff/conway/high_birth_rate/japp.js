let w = 42
let g = []
let i = -1, j

while (++i < w) {
    let tmp = []
    j = -1
    while (++j < w) {
        if (Math.random() >= .4) {
            tmp.push('#')
        } else {
            tmp.push('.')
        }
    }
    g.push(tmp)
}

printer(g)
game(g, w)

function game(g, w) {
    setTimeout(function () {
        let gg = []
        let r = -1, c
        while (++r < w) {
            let tmp = []
            c = -1
            while (++c < w) {
                let n = count_neighbors(g, r, c, w)
                /*

                High Birth Rate:
                    Any dead cell with exactly two live neighbors becomes a live cell.

                This rule promotes more frequent cell reproduction.


                Observation:
                    Too crowded
                */
                if (g[r][c] == '.') {
                    if (n == 2 /* 3 */) {
                        tmp.push('#')
                    }
                    else {
                        tmp.push('.')
                    }
                    continue
                }
                if ([2, 3].includes(n)) {
                    tmp.push('#')
                }
                else {
                    tmp.push('.')
                }
            }
            gg.push(tmp)
        }
        g = gg.map(function (a) { return a.slice() })
        printer(g)
        game(g, w)
    }, 100)
}
function count_neighbors(g, R, C, w) {
    let dir = [-1, 0, 1]
    let res = 0, r, c
    for (let a of dir) {
        for (let b of dir) {
            if (a == b && a == 0) {
                continue
            }
            r = R + a
            c = C + b

            // console.log(r, c)

            if (r < 0) {
                r = w - 1
            } else if (r > w - 1) {
                r = 0
            }

            if (c < 0) {
                c = w - 1
            } else if (c > w - 1) {
                c = 0
            }
            if (g[r][c] == '#') {
                ++res
            }
        }
    }
    return res
}

function printer(g) {
    for (let line of g) {
        console.log(line.join(' '))
    }
    console.log()
}


