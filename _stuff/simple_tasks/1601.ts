import * as fs from 'fs'


let facing = 0;
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];
let x = 0, y = 0;
const E = new Set();
let ok = false;
let first
const input :string [] = fs.readFileSync('inputs/2201.in').toString().trim().split(", ");

for (const s of input) {
  if (s[0] === "L") {
    facing = (facing + 3) % 4;
  }
  if (s[0] === "R") {
    facing = (facing + 1) % 4;
  }
  const dist = parseInt(s.slice(1));

  // Part 2 logic starts
  if (dy[facing] === 0) {
    const n = dx[facing] > 0 ? 1 : -1;
    for (let i = n + x; i < n + x + dx[facing] * dist; i += n) {
      if (!E.has(`${i},${y}`)) {
        E.add(`${i},${y}`);
      } else {
        if (!ok) {
          first = [i, y];
          ok = true;
        }
      }
    }
  } else {
    const n = dy[facing] > 0 ? 1 : -1;
    for (let i = n + y; i < n + y + dy[facing] * dist; i += n) {
      if (!E.has(`${x},${i}`)) {
        E.add(`${x},${i}`);
      } else {
        if (!ok) {
          first = [x, i];
          ok = true;
        }
      }
    }
  }
  // ends

  x += dx[facing] * dist;
  y += dy[facing] * dist;
}

const p1 = Math.abs(x) + Math.abs(y);
const p2 = Math.abs(first[0]) + Math.abs(first[1]);
console.log(p1);
console.log(p2);
