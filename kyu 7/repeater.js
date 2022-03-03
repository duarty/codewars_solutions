
/* kata link - https://www.codewars.com/kata/585a1a227cb58d8d740001c3
//jose duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 

Write a function named repeater() that takes two arguments (a string and a number), 
and returns a new string where the input string is repeated that many times.
example "a", 5 --> "aaaaa"
*/

function repeater(string, n){ // this function is simple: repeat an string n times
    let multiString = ""     //start a variable empty string to receive an string n times
    for(let i = 0; i < n; i++){ // loop for to increment i  while it is less than n
        multiString += string  // += a simple method to concat string, in the case, n times
    }
    return multiString
}
//console.log(repeater("z", 10)) //test that increment z 10x times repeater("z", 10) ===>> zzzzzzzzzz