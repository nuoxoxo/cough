import * as fs from 'fs'

let arr:number[] = fs.readFileSync('inputs/2101.in').toString().trim().split('\n').map((n) => parseInt(n))
let res:number, 
    i:number,
    res2:number


res = 0
i = 0
while (++i < arr.length) {
    if (arr[i] > arr[i - 1]) {
        ++res
    }
}

res2 = 0
i = 2
while (++i < arr.length) {
    if (arr[i] > arr[i - 3]) {
        ++res2
    }
}

console.log(res)
console.log(res2)

console.assert(res === 1228)
console.assert(res2 === 1257)

