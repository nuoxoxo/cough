import * as fs from 'fs'

let arr:number[] = fs.readFileSync('inputs/2001.in').toString().trim().split('\n').map((n) => parseInt(n))
let D:number[] = []

let res = 0
for (let a of arr) {
    if (D.includes(2020 - a)) {
        res = (2020 - a) * a
    } else {
        D.push(a)
    }
}

let res2 = 0
for (let a of arr) {
    for (let b of arr) {
        for (let c of arr) {
            if (a ^ b && b ^ c && a ^ c && a + b + c == 2020) {
                res2 = a * b * c
            }
        }
    }
}


console.log(res)
console.log(res2)

