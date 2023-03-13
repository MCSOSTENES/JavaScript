/*5 Kyu

You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)
*/

const REGEXP = srt => srt.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^])(?=.*\d)[a-zA-Z\d]{6,}$/g)? true:false




console.log (REGEXP('xf98Ex4Y1') )      //, true);
//console.log (REGEXP('DSJKHD23'))       //, false);
//console.log (REGEXP('ghdfj32') )      //, false);
//console.log (REGEXP('dsF43')   )    //, false);
//console.log (REGEXP('4fdg5Fj3'))       //, true);
//console.log (REGEXP('DHSJdhjsU') )       //, false);
//console.log (REGEXP('fjd3IR9.;') )       //, false);
//console.log (REGEXP('fjd3  IR9') )       //, false);
//console.log (REGEXP('djI38D55'))       //, true);
//console.log (REGEXP('djI3_8D55'))        //, false);
//console.log (REGEXP('djI38D55@@') )        //, false);