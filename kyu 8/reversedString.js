/*
https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
José Duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
   let reversedString = ''
   for (let i = str.length - 1; i >= 0; i--){
      reversedString += str[i]
   }
   return reversedString
}
//console.log(solution('world')) //test line