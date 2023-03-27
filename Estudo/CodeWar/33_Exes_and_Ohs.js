/* 7Kyu
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */
function XO(str) {
    let nO = str.match(new RegExp(/[o]/gi))?str.match(new RegExp(/[o]/gi)):''
    let nX = str.match(new RegExp(/[x]/gi))? str.match(new RegExp(/[x]/gi)): ''
    if(nO.length == nX.length){
        return true
    }
    else{
        return false
    }
}

  console.log(XO('xo'))    //,true);
  console.log(XO("xxOo"))    //,true);
  console.log(XO("xxxm"))    //,false);
  console.log(XO("Oo"))    //,false);
  console.log(XO("ooom"))    //,false);