/*Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe" */


//******************************************************************* */
//My solution
  function toWeirdCase2(string){
    let str=''
    let words = string.split(' ')
    for (let j=0; j<words.length; j++){
        for(let i = 0; i < words[j].length; i++){
            if(i%2 == 0){
                str += words[j].charAt(i).toUpperCase() 
            }
            else{
                str += words[j].charAt(i).toLowerCase() 
            }
        }
        if(j<words.length-1){ str +=' '}
    }
    return str
  }

//Other solution
function toWeirdCase(string){
    return string.split(' ').map(function(word){ //separe words
        return word.split('').map(function(letter, index){ //separe letters
            return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase() //change letters
        }).join(''); //join letters
    }).join(' '); //join words
} // Beautiful


  console.log(toWeirdCase('This is a test'))
  console.log(toWeirdCase2('This is a test'))