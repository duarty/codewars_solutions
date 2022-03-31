/*
kata (7 kyu) - https://www.codewars.com/kata/5413759479ba273f8100003d
jose duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
(the dedicated builtin(s) functionalities are deactivated)

*/

reverse = function (array) {
    let printOut = []
    for(let i = array.length - 1; i >= 0; i--){
        printOut.push(array[i])    
      }
      return printOut
}

//console.log(reverse([1,null,14,"two"])) line for tests