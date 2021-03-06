/* kata - https://www.codewars.com/kata/5513795bd3fafb56c200049e
José Duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 

Create a function with two arguments that will return an array of the first (n) multiples of (x).
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array (or list in Python, Haskell or Elixir).
Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/
function countBy(x, n) { //mmultiples of x to n
    let z = []; // create empty z array to storage the multiples
    for (let i = 1; i <= n; i++){// for to count i = 0 to n, increment i in 1 by 1
        z.push(x * i) // push the multiples in the array
    }
    return z;
}

//console.log(countBy(2,5)) //test line
