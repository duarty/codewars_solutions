/* kata - https://www.codewars.com/kata/53dc23c68a0c93699800041d
José Duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

*/

function smash (words) {
    return words.join(" ")
 };
//console.log(smash(['hello', 'world', 'this', 'is', 'great'])) // line for tests
