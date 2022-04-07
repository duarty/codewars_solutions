/*
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
José Duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
    let beforeRmvChars = ''
    for(let i = 1; i < str.length - 1; i++){
      beforeRmvChars += str[i]
    }
    return beforeRmvChars
  };
  