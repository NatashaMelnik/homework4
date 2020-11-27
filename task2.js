let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

function spiralMatrixIII(R, C, r0, c0) {
    var res = [];
    for (var i = 0; i < R * C; i++) {
        res[i] = new Array();
    }

    if (R == 0 || C == 0) {
        return res;
    }

    res[0] = [r0, c0];

    let count = 1;
    let index = 0;
    let k = 1;

    while (count < R * C) {
        for (let j = 0; j < 2; j++) {
            let dir = dirs[index % 4];
            for (let i = 0; i < k; i++) {
                r0 += dir[0];
                c0 += dir[1];
                if (r0 >= 0 && r0 < R && c0 >= 0 && c0 < C) {
                    res[count++] = new Array(r0, c0);
                }
            }

            index++;
        }

        k++;
    }
    return res;
}

console.log(spiralMatrixIII(1, 4, 0, 0));
console.log(spiralMatrixIII(5, 6, 1, 4));
