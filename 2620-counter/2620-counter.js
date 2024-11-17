/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let sum = n - 1
    return function() {
        sum = sum + 1
        return sum
    };
};

//function createAdder(a) {
//     function f(b) {
//         const sum = a + b;
//         return sum;
//     }
//     return f;
// }
// const f = createAdder(3);
// console.log(f(4)); // 7

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */