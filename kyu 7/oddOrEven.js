/*
katas kyu 7 - https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
jose duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283
Task:

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

*/
function oddOrEven(array) {
    let parImpar = 0
    for (let i = 0; i < array.length; i++) {
        parImpar += array[i]; 
    }
    return (parImpar % 2 === 0) ? 'even' : 'odd'
 }