/* katas - https://www.codewars.com/kata/515e271a311df0350d00000f
José Duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers){
    let squaresum = 0 // create a variable = 0 to storage sum the square numbers
    for(i = 0; i < numbers.length; i++){ //loop for interact in array until i = numbers length
        squaresum += (numbers[i] ** 2) // stores in squaresum var numbers in position i squared 
    }
    return squaresum
}
//console.log(squareSum([1,2,2])) // test line
