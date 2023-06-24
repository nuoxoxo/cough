import * as fs from 'fs' // correct way to import fs in Typescript
// import fs from 'fs'

let input = fs.readFileSync('inputs/1501.in').toString().trim().split('')

//  part 1

let floor = 0
let res = input.reduce(
    (floor: number, c: string) => (
        c === '(' ? floor + 1 : floor - 1
    ), 0
);


//  part 2

floor = 0
let i = -1,
    res2

while (++i < input.length) {
    if (floor < 0) {
        break
    }
    input[i] === '(' ? floor++ : floor--
}

res2 = i


//  res

console.log(res)
console.log(res2)

