/* 6kyu
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
 */

function towerBuilder(nFloors) {
    let tower = Array(nFloors).fill('')
    for(let i = 1; i <= nFloors; i++){
        tower[i-1] = " ".repeat(nFloors-i) + "*".repeat(2*i-1) + " ".repeat(nFloors-i)
    }
    return tower
}

console.log(towerBuilder(1))
console.log(towerBuilder(2))
console.log(towerBuilder(3))