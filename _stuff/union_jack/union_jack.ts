let max = 43

var arg = parseInt(process.argv.slice(2)[0])
console.log('arg:', arg)

// let W:number = arg
let W:number = Math.floor(Math.random() * max)
console.log('wid:', W)

let M:number = Math.floor(W / 2)

let i:number = -1, j
let grid:string[][] = []
while (++i < W) {
    let s:string[] = []
    j = -1
    while (++j < W) {
        s.push('.')
    }
    grid.push(s)
}
// console.log(grid)

let v:string[][] = grid.map(function(arr) {
    return arr.slice();
})

/*
# . . . . . . .
. # . . . . . .
. . # . . . . .
. . . # . . . .
. . . . # . . .
. . . . . # . .
. . . . . . # .
. . . . . . . #
*/
i = -1
while (++i < W) {
    j = -1
    while (++j < W) {
        if (i == j) {
            v[i][j] = '#'
        }
    }
}
for (let line of v) {
    console.log(line.join(' '))
}
console.log()


/*
# . . . . . . #
. # . . . . # .
. . # . . # . .
. . . # # . . .
. . . # # . . .
. . # . . # . .
. # . . . . # .
# . . . . . . #
*/
i = -1
while (++i < W) {
    j = -1
    while (++j < W) {
        if (i + j === W - 1) {
            v[i][j] = '#'
        }
    }
}
for (let line of v) {
    console.log(line.join(' '))
}
console.log()

/*
# . . # # . . #
. # . # # . # .
. . # # # # . .
# # # # # # # #
# # # # # # # #
. . # # # # . .
. # . # # . # .
# . . # # . . #
*/

i = -1
while (++i < W) {
    j = -1
    while (++j < W) {
        if (W % 2) {
            // do something
            if (i === M || j === M) {
                v[i][j] = '#'
            }
        } else {
            if ([M, M - 1].includes(i) || [M, M - 1].includes(j)) {
                v[i][j] = '#'
            }
        }
    }
}
for (let line of v) {
    console.log(line.join(' '))
}
