/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var arr = input.sort();
    for (let i = 0; i < arr.length; i++) {
        var count = 0;
        if (arr[i] === arr[i-1]) {
            count ++;
        }
        if (count === arr.length) {
            return arr[i];
        }
    }
    return -1;
};