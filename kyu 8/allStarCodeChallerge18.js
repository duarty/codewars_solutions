/* kata - https://www.codewars.com/kata/5865918c6b569962950002a1
José Duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 
This Kata is intended as a small challenge for my students (not for we xD)

All Star Code Challenge #18
Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1
*/

function strCount(str, letter){
    let strCount = 0 //start variable to count a string ocurrences 
    for(i = 0; i < str.length; i++){ // a for loop to interact in string
        str[i] == letter ? strCount += 1 : {} ; //tenary op to check if str in position i is equal a lettter parameter, if true, add 1 to strCount up to the same number of occurrences
    }
    return strCount
}
console.log(strCount("Hello", "l"))
