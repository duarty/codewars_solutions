/* kata - https://www.codewars.com/kata/540c33513b6532cd58000259
José Duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 
Sum of all arguments

Write a function that finds the sum of all its arguments.
*/
function sum(...n) {
    let arraySum = []
    arraySum = n
    let sumOfValues = 0
    for(let i = 0; i < arraySum.length; i++){
        sumOfValues += arraySum[i]
    }
    return sumOfValues
}
console.log(sum(1,2,3))
