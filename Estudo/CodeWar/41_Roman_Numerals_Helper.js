/**
 4 Kyu
 Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
to roman:
2000 -> "MM"
1666 -> "MDCLXVI"
1000 -> "M"
 400 -> "CD"
  90 -> "XC"
  40 -> "XL"
   1 -> "I"

from roman:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      -> 400
"XC"      -> 90
"XL"      -> 40
"I"       -> 1
Help
Symbol	Value
I	1
IV	4
V	5
X	10
L	50
C	100
D	500
M	1000
 */
let roman = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1}

class RomanNumerals {
    
    static toRoman(num) {
        let str = ''
        for (let key in roman){
            while(num >= roman[key]){
                str += key
                num -= roman[key]
            }
        }
      return str;
    }
    static fromRoman(str) {
        let num = 0
        for(let i = 0; i < str.length; i++){
            if(roman[str[i]] < roman[str[i+1]]){
                num += (roman[str[i+1]] - roman[str[i]])
                i ++
            }
            else num += roman[str[i]]
        }
        return num;
    }
    //solution with RegExp
    static fromRoman2(str) {
        return str.match(/CM|CD|XC|XL|IX|IV|[A-Z]/g).reduce((acc, el) => acc + roman[el], 0);
   }
}


//console.log(RomanNumerals.toRoman(359))     //, //'M');
//console.log(RomanNumerals.toRoman(4))     //, 'IV');
//console.log(RomanNumerals.toRoman(1))     //, 'I');
//console.log(RomanNumerals.toRoman(1990))     //, 'MCMXC');
//console.log(RomanNumerals.toRoman(2008))     //, 'MMVIII');
//
console.log(RomanNumerals.fromRoman2('XXI'))     //, 21);
//console.log(RomanNumerals.fromRoman('I'))     //, 1);
//console.log(RomanNumerals.fromRoman('MMMDXIV'))     //, 4);
//console.log(RomanNumerals.fromRoman('MMVIII'))     //, 2008);
//console.log(RomanNumerals.fromRoman('MDCLXVI'))     //, 1666);