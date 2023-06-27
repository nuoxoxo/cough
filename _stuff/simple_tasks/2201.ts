import * as fs from 'fs'

let input:string[] = fs.readFileSync('inputs/2201.in').toString().trim().split('\n\n')
let arr:number[] = []

for (let i of input) {
    let sum = i.split('\n').map((n) => parseInt(n)).reduce((a, b) => a + b, 0)
    arr.push(sum)
}

arr.sort((a, b) => {return b - a})

console.log(arr[0])
console.log(arr[0] + arr[1] + arr[2])
