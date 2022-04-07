/*
https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
José Duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]

*/

function digitize(n) {
    let reverseArray = []
    let newString = n.toString()
    for(let i = newString.length - 1; i >= 0; i--){
      reverseArray.push(parseInt(newString[i]))
    }
    return reverseArray
}