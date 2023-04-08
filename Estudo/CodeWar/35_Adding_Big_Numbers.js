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

//second solution
function add1(a,b){
    let sizeMax = 0; let sizeMin = 0; let tiny = ""; let bigger = ""; let aux = 0; let arrFinal = [];

    (a.length > b.length)? (sizeMax = a.length, bigger = a, sizeMin = b.length, tiny = b) : (sizeMax = b.length, bigger = b, sizeMin = a.length, tiny = a);

    tiny = tiny.split('')    
    for (i = 0; i < sizeMax-sizeMin; i++){
        tiny.unshift('0')
    }

    tiny = tiny.join('')
    for ( i = sizeMax-1; i >=0; i--){
        let sum = aux + Number(bigger[i]) + Number(tiny[i])
        if (sum < 10 || i == 0){arrFinal.unshift(sum); aux = 0 }
        else {arrFinal.unshift(sum%10); aux = parseInt(sum/10) }
    }

    return arrFinal.join('')
}

//"best pratices" solution
function add (a, b) {
    var res = '', c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop() // ~ string em numero, 2* ~ transforma outro tipo de variavel em numero, ex: ~~true = 1 
      res = c % 10 + res // resposta = resto da divisao por 10 + valor da resposta anterior
      c = c > 9 // compara se a soma é maior que 9, se sim c = true e ~~true = 1, no inicio do loop
    }
    return res
}

//console.log(add("1", "1"))         //, "2");
//console.log(add("123", "456"))         //, "579");
//console.log(add("888", "222"))         //, "1110");
//console.log(add("1372", "69"))         //, "1441");
//console.log(add("12", "456"))         //, "468");
//console.log(add("101", "100"))         //, "201");
//console.log(add('63829983432984289347293874', '90938498237058927340892374089'))         //, "91002328220491911630239667963")

reverse = array => array.reverse()

console.log(reverse([791, 582, 851, 395, 208, 804]))