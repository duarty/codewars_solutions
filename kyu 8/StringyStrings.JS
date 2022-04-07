/*
https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript
José Duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

function stringy(size) {
   let zerosAndOnes = ''
   for (let i = 0; i < size; i++) {
    (i % 2 == 0) ? zerosAndOnes += 1 : zerosAndOnes += 0
   }  
   return zerosAndOnes
}