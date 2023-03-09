/* 6kyu
DESCRIPTION:
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

//My solution - a very bad solution 
function countSmileys(arr) {
    let cont = 0
    for(let i=0; i < arr.length; i++){
        if ((arr[i].indexOf(':') != -1 || arr[i].indexOf(';') != -1)&&(arr[i].indexOf('~') != -1 || arr[i].indexOf('-') != -1 || arr[i].length == 2)&& (arr[i].indexOf(')') != -1 || arr[i].indexOf('D') != -1)&&(arr[i].length <=3)){
            cont ++
        }
    } return cont
} 

//Other solution
const countSmileys2 = arr => arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;


console.log(countSmileys([":-)" , ";~D" , ":-D" , ":_D"]));    //3   
console.log(countSmileys([":~D" , ":->" , ";~(" , ";>" , ":>" , ";oD" , ":~>"]));    //1 
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));

console.log(countSmileys2([":-)" , ";~D" , ":-D" , ":_D"]));    //3   
console.log(countSmileys2([":~D" , ":->" , ";~(" , ";>" , ":>" , ";oD" , ":~>"]));    //1 
console.log(countSmileys2([';]', ':[', ';*', ':$', ';-D']));