// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let prev1 = 1;
    let prev2 = 1;
    let curr = 1;
    for (let i = 2; i < n; i++) {
        curr = prev1+prev2;
        prev1 = prev2;
        prev2 = curr;
    }
    return curr;
}

//console.log(fib(39));
module.exports = fib;
