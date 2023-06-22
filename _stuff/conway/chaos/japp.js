let w = 42
let g = []
let i = -1, j

while (++i < w) {
    let tmp = []
    j = -1
    while (++j < w) {
        if (Math.random() >= .7) {
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

                Chaos:
                    Any live cell with exactly one live neighbor dies, 
                    any dead cell with exactly four live neighbors becomes a live cell. 

                This rule introduces more chaotic behavior
                and can lead to rapid changes in the pattern.

                Observation:
                    Fast peaceful growth, not chaotic
                */
                if (g[r][c] == '.' && n == 4) {
                    tmp.push('#')
                } else if (g[r][c] === '#' && n == 1) {
                    tmp.push('.')
                } else {
                    tmp.push(g[r][c])
                }
                /*
                if (g[r][c] == '.') {
                    if (n == 3) {
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
                */
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


