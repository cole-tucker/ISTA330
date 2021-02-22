/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    var first = 1;
    var second = 0;
    var tmp;

    while (n >= 0){
        tmp = first;
        first = first + second;
        second = tmp;
        n--;
    }
  
    return second;
};