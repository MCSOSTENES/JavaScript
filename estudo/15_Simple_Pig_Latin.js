/* 5Kyu
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
 */

//My solution, primeira vez que uso arrow functions, map e regular expressions e funcionar de primeira kkk \o/ 

const pigIt2 = (str) => str.split(' ').map(word => word.match(/[a-z]+/ig)? (word.slice(1) + word.slice(0,1) + 'ay'): word).join(' ')
    
//Other solution, best pratices

const pigIt1 = str => str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")

//Other good solution

const pigIt = str => str.split(" ").map( (item) => `${item.substr(1)}${item[0]}ay` ).join(" ")


console.log(pigIt('Pig latin is cool'))    //,'igPay atinlay siay oolcay')
console.log(pigIt('This is my string'))    //,'hisTay siay ymay tringsay')