import * as fs from 'fs'

let input:string[] = fs.readFileSync('inputs/2201.in').toString().trim().split('\n\n')
let arr:number[] = []
let res:number,
    res2:number

/*
for (let i of input) {
    let sum = i.split('\n').map((n) => parseInt(n)).reduce((a, b) => a + b, 0)
    arr.push(sum)
}
*/

input.forEach((i) => {
    let sum = i.split('\n').map((n) => parseInt(n)).reduce((a, b) => a + b, 0)
    arr.push(sum)
})

arr.sort((a, b) => {return b - a})

res = arr[0]
res2 = arr[0] + arr[1] + arr[2]

console.log(arr[0])
console.log(arr[0] + arr[1] + arr[2])

console.assert(res === 69281)
console.assert(res2 === 201524)


