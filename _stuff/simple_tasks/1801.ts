import * as fs from 'fs'

let arr:number[]

arr = fs.readFileSync('inputs/1801.in')
        .toString().trim()
        .split('\n')
        .map((n) => parseInt(n))

let res = arr.reduce((a, b) => a + b, 0)

let lv = 0
let res2 = 1e9
let s: Set<number> = new Set()

let i = -1
while (++i < arr.length) {
    let a = arr[i]
    lv += a
    if (s.has(lv)) {
        res2 = lv
        break
    } else {
        s.add(lv)
    }
    if (i + 1 === arr.length) {
        i = -1
    }
}

console.log(res)
console.log(res2)

