// const W = 42
// const H = W
// let G = []
// let Charset = '@#$%&?¬πø¥†®©∑œ∂ßµ∆≤∫çƒƒ'
// // let Choice = Math.floor(Math.random() * Charset.length)
// let Symbol = Charset[/*Choice*/ Math.floor(Math.random() * Charset.length)]

// window.onload = () => {
//     document.body.style.backgroundColor = "black"
//     let ctn = document.querySelector('.container')
//     let res = ''
//     let i = -1
//     while (++i < H) {
//         let cells = ''
//         let row = []
//         let j = -1
//         while (++j < W) {
//             let chr
//             if (Math.random() >= .4) {
//                 chr = Symbol
//                 cells += chr
//                 row.push(chr)
//             } else {
//                 chr = '.'
//                 cells += chr
//                 row.push(chr)
//             }
//             if (j ^ W - 1) {
//                 cells += ' '
//             }
//         }
//         res += '<div id=\'rows\' class=\'rows\'>' + cells + '</div>'
//         G.push(row)
//     }
//     ctn.innerHTML = res
//     // console.log(G)
//     ctn.onclick = automaton
// }





// function automaton () {
//     // console.log('clicked!!')
//     while (true){
//         iteration()
//         let rows = document.getElementById('rows')
//         let i = -1
//         while (++i < H) {
//             rows.innerText = G[i].join(' ')
//         }
//     }
// }


// function iteration () {
//     setTimeout(function () {
//         // console.log('clicked!!')
//         let g = []
//         let r = -1, c
//         while (++r < H) {
//             let tmp = []
//             c = -1
//             while (++c < W) {
//                 let n = count_neighbors(r, c)
//                 if (G[r][c] == '.') {
//                     if (n == 3) {
//                         tmp.push(Symbol)
//                     } else {
//                         tmp.push('.')
//                     }
//                     continue
//                 }
//                 if ([2, 3].includes(n)) {
//                     tmp.push(Symbol)
//                 } else {
//                     tmp.push('.')
//                 }
//             }
//             g.push(tmp)
//         }
//         G = g.map(function (a) { return a.slice() })

//         // console.log(G)
//         // printer(G)



//     }, 100)
// }


// function count_neighbors(R, C) {
//     let dir = [-1, 0, 1]
//     let res = 0, r, c
//     for (let a of dir) {
//         for (let b of dir) {
//             if (a == b && a == '.') {
//                 continue
//             }
//             r = R + a
//             c = C + b

//             if (r < 0) {
//                 r = H - 1
//             } else if (r > H - 1) {
//                 r = 0
//             }

//             if (c < 0) {
//                 c = W - 1
//             } else if (c > W - 1) {
//                 c = 0
//             }
//             if (G[r][c] == Symbol) {
//                 ++res
//             }
//         }
//     }
//     return res
// }

// function printer() {
//     // for (let line of G) {
//     //     console.log(line.join(' '))
//     // }
//     // console.log()
// }


const W = 42;
const H = W;
let G = [];
let Charset = '@#$%&?¬πø¥†®©∑œ∂ßµ∆≤∫çƒƒ';
let Symbol = Charset[Math.floor(Math.random() * Charset.length)];

window.onload = () => {
  document.body.style.backgroundColor = 'black';
  let ctn = document.querySelector('.container');
  let res = '';
  let i = -1;
  while (++i < H) {
    let cells = '';
    let row = [];
    let j = -1;
    while (++j < W) {
      let chr;
      if (Math.random() >= 0.4) {
        chr = Symbol;
        cells += chr;
        row.push(chr);
      } else {
        chr = '.';
        cells += chr;
        row.push(chr);
      }
      if (j ^ W - 1) {
        cells += ' ';
      }
    }
    let rowId = 'row-' + i; // ... 
    res += '<div id=\'' + rowId + '\' class=\'rows\'>' + cells + '</div>';
    G.push(row);
  }
  ctn.innerHTML = res;
  ctn.onclick = startAutomaton;
};

function startAutomaton() {
  requestAnimationFrame(iterateAutomaton);
}

function iterateAutomaton() {
  iteration();
  let ctn = document.querySelector('.container');
  let i = -1;
  while (++i < H) {
    let rowId = 'row-' + i;
    let row = document.getElementById(rowId);
    row.innerText = G[i].join(' ');
  }
  requestAnimationFrame(iterateAutomaton);
}

function iteration() {
  let g = [];
  let r = -1,
    c;
  while (++r < H) {
    let tmp = [];
    c = -1;
    while (++c < W) {
      let n = count_neighbors(r, c);
      if (G[r][c] === '.') {
        if (n === 3) {
          tmp.push(Symbol);
        } else {
          tmp.push('.');
        }
        continue;
      }
      if ([2, 3].includes(n)) {
        tmp.push(Symbol);
      } else {
        tmp.push('.');
      }
    }
    g.push(tmp);
  }
  G = g.map(function (a) {
    return a.slice();
  });
}

function count_neighbors(R, C) {
  let dir = [-1, 0, 1];
  let res = 0,
    r,
    c;
  for (let a of dir) {
    for (let b of dir) {
      if (a === 0 && b === 0) {
        continue;
      }
      r = (R + a + H) % H;
      c = (C + b + W) % W;
      if (G[r][c] === Symbol) {
        ++res;
      }
    }
  }
  return res;
}
