/*
https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript
José Duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 

Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
*/
function oddCount(n){
    let count = 0
    for (let i = 0; i < n; i++) {
        i % 2 !== 0 ? count += 1 : {}

    }
    return count
  }

  console.log(oddCount(123456789101123232415))
  