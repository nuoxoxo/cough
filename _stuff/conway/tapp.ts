let w:number = 42
let i:number = -1, j:number
let g:string[][] = []
while (++i < w) {
    j = -1
    let tmp:string[] = []
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

function game(g:string[][], w:number) {
    setTimeout(() => {
        let gg:string[][] = []
        let r:number = -1, c:number
        while (++r < w) {
            let tmp:string[] = []
            c = -1
            while (++c < w) {
                let n:number = count_neighbors(g, r, c, w)
                if (g[r][c] == '.') {
                    if (n == 3) {
                        tmp.push('#')
                    } else {
                        tmp.push('.')
                    }
                    continue
                }
                if ([2, 3].includes(n)) {
                    tmp.push('#')
                } else {
                    tmp.push('.')
                }
            }
            gg.push(tmp)
        }
        g = gg.map((a) => {return a.slice()})
        printer(g)
        game(g, w)
    }, 100)
}


function count_neighbors(g:string[][], R:number, C:number, w:number) {
    let dir:number[] = [-1, 0, 1]
    let res:number = 0, r:number, c:number
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


function printer(g:string[][]) { for (let line of g) {console.log(line.join(' '))} console.log() }

game(g, w)
