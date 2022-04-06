/*
https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
//jose duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr){
    let stay = []
    for (let i = 0; i < arr.length; i++) {
        if( i % 2 == 0){
            stay.push(arr[i])
        }
        
    }
    return stay
}

//console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])) //test line