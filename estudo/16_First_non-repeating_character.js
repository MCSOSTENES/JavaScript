/* 5Kyu
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
 */

//My sad solution
function firstNonRepeatingLetter2(s) {
    let str = s
    str = str.toLowerCase().split('').sort().join('')
    let re = /([a-z]).*\1/ig
    let duplicate = str.match(re)? str.match(re).join(''):''
    if(s.length != duplicate.length){
        for(let i=0; i < s.length; i++){
            for(let j=0; j < s.length; j++){
              if(s[i].toLowerCase() == s[j].toLowerCase() && i != j){
                  j = s.length
              }
              else if(j == s.length - 1 ){
                return s[i]
              }    
            }
          }
    }
    else{
        return ''
    }
}

//This is other solution propose by me

const firstNonRepeatingLetter = s => {
   let NonRep = s.split('').map(letter => s.match(new RegExp(letter,"gi")).length === 1? letter:'').join('')[0]
   return NonRep? NonRep:''
}

//Other solution
function firstNonRepeatingLetter1(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
  }

console.log(firstNonRepeatingLetter(''))
console.log(firstNonRepeatingLetter('aabcdbcdfgfgfg'))    //, 'a');
console.log(firstNonRepeatingLetter('stress'))    //, 't');
console.log(firstNonRepeatingLetter('moonmen'))    //, 'e');