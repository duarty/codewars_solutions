
/* kata link - https://www.codewars.com/kata/544aed4c4a30184e960010f4
//jose duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 
Create a function named divisors/Divisors that takes an integer n > 1 and 
returns an array with  all of the integer's divisors(except for 1 and the number itself), 
from smallest to largest. If the number is prime return the string '(integer) is prime'

*/

function divisors(integer) { 
    let arrayDivisors = [] // create array 
    if(isPrime(integer)){  //check if input integer is prime
        return `${integer} is prime` // if integer is prime, return (number) is prime
    }else{ // if integer number is not prime enter in for loop
        for(let i = 0; i < integer; i++){ // run a for loop "while" i is less than the integer (number) and increment i variable
           integer % i == 0 && i !== 1? arrayDivisors.push(i): {} ; // this tenary operator check if the rest of division integer i is 0
           }
        }
        return arrayDivisors //return arrayDivisors
}
// console.log(divisors(12)) call for tests
// I'm not the creator of this isPrime function, I leave the link where I got it. I just adapted it to my needs, removing the Math.sqrt method and applying pure logic 

function isPrime(prime) { // i prefer use a separed function to check if integer is prime in case me (or you) need to reuse it later
    for(let j = 2; j < prime; j++) // looping for with var controller i starting in 2 (prime numbers start in 2...)
      if(prime % j === 0) return false; // return false if the remainder of the division of prime by i is equal to 0 (i.e. not prime)
    return prime > 1; // return true if the remainder of the division of prime by i is not equal to 0
}


// ref. for isPrime() function https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript/53351552