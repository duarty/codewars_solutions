/*
https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
//jose duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/

let upperCase = ''
let count = []
function capitals(word) {
	for (let i = 0; i < word.length; i++) {
        upperCase += word[i]
        if(upperCase[i].toUpperCase() === word[i]){
            count.push(i)
        }
    }
    return count
};

console.log(capitals('aOEsHRbWcq')) 