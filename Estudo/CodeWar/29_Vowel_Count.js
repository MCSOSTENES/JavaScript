/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

//My solution
const getCount1 = str => str.match(new RegExp(/[aeiou]+?/,'ig'))? str.match(new RegExp(/[aeiou]+?/,'ig')).length:0

//Nice solution
const getCount = str =>(str.match(/[aeiou]/ig)||[]).length
                        //(is match or (if null => [])).length

console.log(getCount("abracadabra"))
console.log(getCount("pear tree"))
console.log(getCount("my pyx"))