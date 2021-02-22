/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
    // i - 1 & i
    var def = [[1], [1,1]];
    for (let i = 0; i < n; i++) {
        if (n === 1) {
            return [[1]];
        } else if (n === 2) {
            return [[1], [1,1]];
        } else {
            var row = [1];
            for (let j = 1; j < i; j++) {
                row.push(def[i-1][j-1] + def[i-1][j]);
            }
            def.push(row);
        }
    }
};