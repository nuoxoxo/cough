import * as fs from 'fs'

let s:string

s = fs.readFileSync('inputs/1701.in')
        .toString()
        .trim()

let res:number = 0
let i = -1
while (++i < s.length) {
    let end = i + 1
    if (end === s.length) {
        end = 0
    }
    if (s[i] != s[end]) {
        continue
    }
    res += parseInt(s[i])
}

let res2:number = 0
let mid:number = Math.floor(s.length / 2)

i = -1
while (++i < mid) {
    if (s[i] === s[i + mid]) {
        res2 += parseInt(s[i]) * 2
    }
}

console.log(res)
console.log(res2)

