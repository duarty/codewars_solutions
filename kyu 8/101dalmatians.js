/* kata - https://www.codewars.com/kata/56f6919a6b88de18ff000b36
José Duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283 
101 Dalmatians - squash the bugs, not the dogs!

Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.

*/

function howManyDalmatians(n){
    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
       if (n <= 10){
         return dogs[0]
       }else if (n > 10 && n <= 50){
         return dogs[1]
       }else if( n > 50 && n <= 100){
         return dogs[2]
       }else if(n == 101){
         return dogs[3]
       }
}
