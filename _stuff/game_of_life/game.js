var w = 42;
var i = -1, j;
var g = [];
while (++i < w) {
    j = -1;
    var tmp = [];
    while (++j < w) {
        if (Math.random() >= .4) {
            tmp.push('#');
        }
        else {
            tmp.push('.');
        }
    }
    g.push(tmp);
}
printer(g);
function game(g, w) {
    setTimeout(function () {
        var gg = [];
        var r = -1, c;
        while (++r < w) {
            var tmp = [];
            c = -1;
            while (++c < w) {
                var n = count_neighbors(g, r, c, w);
                if (g[r][c] == '.') {
                    if (n == 3) {
                        tmp.push('#');
                    }
                    else {
                        tmp.push('.');
                    }
                    continue;
                }
                if ([2, 3].includes(n)) {
                    tmp.push('#');
                }
                else {
                    tmp.push('.');
                }
            }
            gg.push(tmp);
        }
        g = gg.map(function (a) { return a.slice(); });
        printer(g);
        game(g, w);
    }, 100);
}
function count_neighbors(g, R, C, w) {
    var dir = [-1, 0, 1];
    var res = 0, r, c;
    for (var _i = 0, dir_1 = dir; _i < dir_1.length; _i++) {
        var a = dir_1[_i];
        for (var _a = 0, dir_2 = dir; _a < dir_2.length; _a++) {
            var b = dir_2[_a];
            if (a == b && a == 0) {
                continue;
            }
            r = R + a;
            c = C + b;
            // console.log(r, c)
            if (r < 0) {
                r = w - 1;
            }
            else if (r > w - 1) {
                r = 0;
            }
            if (c < 0) {
                c = w - 1;
            }
            else if (c > w - 1) {
                c = 0;
            }
            if (g[r][c] == '#') {
                ++res;
            }
        }
    }
    return res;
}
function printer(g) { for (var _i = 0, g_1 = g; _i < g_1.length; _i++) {
    var line = g_1[_i];
    console.log(line.join(' '));
} console.log(); }
game(g, w);
