/* My first CodeWars - 08.03.2023

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' 
*/

/*___________________________________________________
//My solution

let solution = (str)=> {
    let new_str = ''
    for (let i = (str.length-1); i >= 0 ; i--){
        new_str += str[i]
      }
      return (new_str)
}

//Other solution 

let solution2 = str => str.split('').reverse().join('');

//Extra test on VisualStudio

let string = "world"
let teste = solution(string)
let teste2 = solution2(string)
console.log(teste)
console.log(teste2)
_________________________________________________*/



/* ***********************************************
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */
/*__________________________________________________

//My solution

function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}

//Other solution

function boolToWord2( bool ){
  return bool ? 'Yes':'No';
}

//Testing arrow functions

let boolToWord3 = bool => (bool ? 'Yes':'No');

//******************GOD MODE************************

var boolToWord = function boolToWord() {
  //compile
  var result = compile(Array.prototype.slice.call(arguments, 0)[0])
  //finish
  return result;
};

function compile(input) {
  var iterator = 0,
      input    = input.toString(),
      output   = [];
  for( ; iterator < input.length; iterator++) {
    output[iterator] = input[iterator];
  }
  switch (output.join('')) {
    case 'true':
      return 'Yes';
      break;
    case 'false':
      return 'No';
      break;
    case 'maybe':
      return 'Maybe';
      break;
    default: 
      throw new Error('Input was not recognized');
  }
}

//Extra for testes

let teste = boolToWord (true)
let teste2 = boolToWord2 (true)
let teste3 = boolToWord2 (true)

console.log(teste)
console.log(teste2)
console.log(teste3)

__________________________________________________*/

/***********************************************
 Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
 

//My code

var summation = function (num) {
  let sum = 0
  for(let i = 1; i <= num ; i++){
    sum += i
  }
  return (sum)
}

let test = 8
console.log (summation(test))

//Other solution using arrow function and P.A

const summation2 = n => n * (n + 1) / 2;
console.log(summation2(test))

//Another solution

var summation3 = function (num) {
  return (num > 1) ? num + summation(num - 1):num;
  //test     if true, use the same function to calc.
}

****************************************************/

/*************************************************
 You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

 
//My code
function likes(names) {
  if(names.length == 0){
    return("no one likes this")
  }
  else if(names.length == 1){
    return(`${names[0]} likes this`)
  }
  else if (names.length == 2){
    return(`${names[0]} and ${names[1]} like this`)
  }
  else if (names.length == 3){
    return(`${names[0]}, ${names[1]} and ${names[2]} like this`)
  }
  else{
    return(`${names[0]}, ${names[1]} and ${names.length-2} others like this`)
  }
}


//Others solutions + increse
function likes2(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return `${names[0]} likes this`; break;
    case 2: return `${names[0]} and ${names[1]} like this`; break;
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break;
    default: return `${names[0]}, ${names[1]} and ${(names.length - 2)} others like this`;
  }
}

let names = ["Alex", "Jacob", "Mark", "Max"]
console.log(likes(names))
console.log(likes2(names))

**************************************************/
