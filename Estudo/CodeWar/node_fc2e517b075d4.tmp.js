/* 4Kyu
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
 */

const add0 = (a, b) => (BigInt(Number(a)) + BigInt(Number(b))).toString() // the kata does not allow use BIgInt()
 function add(a,b){
    let size = 0; (a.length < b.length)? size = a.length:size = b.length
    let sizea = a.length
    let sizeb = b.length
    let addNext = 0
    let arrFinal = []

    for (i = 1; i >= size; i++){
        arrFinal.unshift((Number(a[sizea - i])+Number(b[sizeb - i])).toString())
    }
    return arrFinal.join('')
 }

console.log(add("1", "1"))         //, "2");
console.log(add("123", "456"))         //, "579");
console.log(add("888", "222"))         //, "1110");
console.log(add("1372", "69"))         //, "1441");
console.log(add("12", "456"))         //, "468");
console.log(add("101", "100"))         //, "201");
console.log(add('63829983432984289347293874', '90938498237058927340892374089'))         //, "91002328220491911630239667963")

