let fs = require('fs')
let a:string[] = fs.readFileSync('inputs/1901.in').toString().split('\n')

let res:number = 0
let res2:number = 0

for (let s of a) {
    if (!s) {
        break
    }

    let n:number = parseInt(s.trim())
    res += Math.floor(n / 3) - 2

    let temp:number = Math.floor(n / 3) - 2

    while (temp > 0) {
        res2 += temp
        temp = Math.floor(temp / 3) - 2
    }
}

console.log(res)
console.log(res2)

console.assert(res === 3159380)
console.assert(res2 === 4736213)

