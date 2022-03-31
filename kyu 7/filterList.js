/*
kata kyu 7 - https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
//jose duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

function filter_list(l) {
   let list = []
   for (let i = 0; i < l.length; i++) {
      if(Number.isInteger(l[i])){
        list.push(l[i])
      }else{
        
      }
      
   } 
   return list  
}
console.log(filter_list([1,2,"aasf","1","123",123]))