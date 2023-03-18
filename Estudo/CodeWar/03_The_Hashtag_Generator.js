/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false */

//My solution
function generateHashtag (str) {
    if (str.length > 0){
        
        const REespaces = /\s+/g;
        const REfirstle = / [a-z]/ig;
        
        str = str.replace(str[0], str[0].toUpperCase())
        
        str = str.replace(REfirstle,function(match){
            return match.charAt(1).toUpperCase()})
        
        str = str.replace(REespaces,'')
        
        str = "#" + str
    }
    else{
        return false
    }
    return (str.length <= 140)? str:false
}

//Best pratices solution

function generateHashtag2 (str) {
    if(!str || str.length < 1) return false;
    
    var r = '#' + str.split(' ').map(function(el) {
      return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    }).join('');
    return r.length > 140?false:r;
 }


console.log(generateHashtag(""))
console.log(generateHashtag(" ".repeat(200)))
console.log(generateHashtag("Do We have A Hashtag"))
console.log(generateHashtag("Codewars"))
console.log(generateHashtag("Codewars Is Nice"))
console.log(generateHashtag("Codewars is nice"))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))
console.log(generateHashtag("a".repeat(139)))
console.log(generateHashtag("a".repeat(140)))

//*************************************** */

console.log(generateHashtag2(""))
console.log(generateHashtag2(" ".repeat(200)))
console.log(generateHashtag2("Do We have A Hashtag"))
console.log(generateHashtag2("Codewars"))
console.log(generateHashtag2("Codewars Is Nice"))
console.log(generateHashtag2("Codewars is nice"))
console.log(generateHashtag2("code" + " ".repeat(140) + "wars"))
console.log(generateHashtag2("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))
console.log(generateHashtag2("a".repeat(139)))
console.log(generateHashtag2("a".repeat(140)))

