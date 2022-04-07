/*
https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
José Duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
*/

function invert(array) {
    let newArray = []
    for(let i = 0; i < array.length; i++){
       newArray.push(array[i] * - 1)
   }
   return newArray
 }