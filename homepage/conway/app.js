var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var g_cols = 100;
var g_rows = 42;
var g_grid = [];
var g_charset = '@#$%&?¬πø¥†®©∑œ∂ßµ∆≤∫çƒ♠♣♥♦♧♤♢♡♫♬✪✯✰♭♮♯';
var g_symbol = g_charset[Math.floor(Math.random() * g_charset.length)];
var g_hollow = '_';
// in JS, animationRequestId is pre-defined
var animationRequestId = null;
window.onload = function () {
    var clr = colorPair()[1];
    console.log(clr, clr.toString());
    document.body.style.backgroundColor = clr.toString();
    var ctn = document.querySelector('.container-conway');
    var res = '';
    var i = -1;
    while (++i < g_rows) {
        var cells = '';
        var row = [];
        var j = -1;
        while (++j < g_cols) {
            var chr = void 0;
            if (Math.random() >= 0.4) {
                chr = g_symbol;
                cells += chr;
                row.push(chr);
            }
            else {
                chr = g_hollow;
                cells += chr;
                row.push(chr);
            }
            if (j ^ g_cols - 1) {
                cells += ' ';
            }
        }
        var rowId = 'row-' + i;
        res += '<div id=\'' + rowId + '\' class=\'rows\'>' + cells + '</div>';
        g_grid.push(row);
    }
    ctn.innerHTML = res;
    ctn.onclick = start_automaton;
};
function start_automaton() {
    // ver 1 : sim accelerates on click
    // iterate_automaton ()
    // ver 2 : does not accelerates
    if (!animationRequestId) {
        iterate_automaton();
    }
}
function iterate_automaton() {
    return __awaiter(this, void 0, void 0, function () {
        var ctn, i, rowId, row;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    iteration();
                    ctn = document.querySelector('.container');
                    i = -1;
                    while (++i < g_rows) {
                        rowId = 'row-' + i;
                        row = document.getElementById(rowId);
                        row.innerText = g_grid[i].join(' ');
                    }
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 42); })];
                case 1:
                    _a.sent();
                    requestAnimationFrame(iterate_automaton);
                    return [2 /*return*/];
            }
        });
    });
}
function iteration() {
    var g = [];
    var r = -1, c;
    while (++r < g_rows) {
        var tmp = [];
        c = -1;
        while (++c < g_cols) {
            var n = count_neighbors(r, c);
            if (g_grid[r][c] === g_hollow) {
                if (n === 3) {
                    tmp.push(g_symbol);
                }
                else {
                    tmp.push(g_hollow);
                }
                continue;
            }
            else if (g_grid[r][c] === g_symbol) {
                if ([2, 3].includes(n)) {
                    tmp.push(g_symbol);
                }
                else {
                    tmp.push(g_hollow);
                }
            }
            else {
                tmp.push(g_grid[r][c]);
            }
        }
        g.push(tmp);
    }
    // vitality hack : one cell flip in each iter
    var x = Math.floor(Math.random() * g_rows);
    var y = Math.floor(Math.random() * g_cols);
    g[x][y] = g_grid[x][y] === g_hollow ? g_symbol : g_hollow;
    // console.log(x, y, g[x][y])
    g_grid = g.map(function (a) {
        return a.slice();
    });
}
function count_neighbors(R, C) {
    var dir = [-1, 0, 1];
    var res = 0, r, c;
    for (var _i = 0, dir_1 = dir; _i < dir_1.length; _i++) {
        var a = dir_1[_i];
        for (var _a = 0, dir_2 = dir; _a < dir_2.length; _a++) {
            var b = dir_2[_a];
            if (a === 0 && b === 0) {
                continue;
            }
            r = (R + a + g_rows) % g_rows;
            c = (C + b + g_cols) % g_cols;
            if (g_grid[r][c] === g_symbol) {
                ++res;
            }
        }
    }
    return res;
}
//  flip background color + change cell to an inverted color
var button_flipper = document.getElementById('btn-flipper');
var color = document.querySelector('.color');
button_flipper.addEventListener('click', function () {
    var res = colorPair();
    console.log(res[1], res[1].toString());
    document.body.style.backgroundColor = res[1].toString();
    // invert cell color
    var ctn = document.querySelector('.container-conway');
    ctn.style.color = invertColorHex(res[1].toString());
    // console.log(res)
});
function colorPair() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var res0 = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ")");
    var res1 = rgbToHexStr(r, g, b).toUpperCase();
    var res2 = [r, g, b];
    return [res0, res1, res2];
}
function rgbToHexStr(r, g, b) {
    return "#" + intToHex(r) + intToHex(g) + intToHex(b);
}
function intToHex(code) {
    var hex = code.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
function invertColorHex(hex) {
    var color = hex.startsWith("#") ? hex.slice(1) : hex;
    var max = 255;
    var r = max - parseInt(color.substr(0, 2), 16);
    var g = max - parseInt(color.substr(2, 2), 16);
    var b = max - parseInt(color.substr(4, 2), 16);
    var res = "#" + [r, g, b].map(function (c) { return c.toString(16).padStart(2, "0"); }).join("");
    return res;
}
// export {}
