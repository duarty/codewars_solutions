/*
https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript 
jose duarte https://github.com/duarty - /joseduartent@gmail.com /whatsapp - +55 95 98100 1283

Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"


*/

function removeUrlAnchor(url){
    let newUrl = ''
    for(let i = 0; i < url.length; i++){
       if(url[i] === '#'){
          return newUrl
       }else{
          newUrl += url[i]
       }
    }
    return newUrl
 }
//console.log(removeUrlAnchor('www.codewars.com/katas/')) //test line