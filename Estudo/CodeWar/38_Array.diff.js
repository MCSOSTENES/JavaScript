/* 6Kyu

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff1(a, b) {
    arrFinal = []
    for (i=0; i < a.length ; i++){
        if (b.indexOf(a[i]) == -1){
            arrFinal.push((a[i]))
        }
    }
    return arrFinal
}

const arrayDiff = (a,b) => a.filter(el => b.indexOf(el) == -1)

console.log(arrayDiff([1,2], [1]))    //, [2], "a was [1,2], b was [1]");
console.log(arrayDiff([1,2,2], [2]))    //, [1], "a was [1,2,2], b was [2]");
console.log(arrayDiff([1,2,2], [1]))    //, [2,2], "a was [1,2,2], b was [1]");
console.log(arrayDiff([1,2,2], []))    //, [1,2,2], "a was [1,2,2], b was []");
console.log(arrayDiff([], [1,2]))    //, [], "a was [], b was [1,2]");
console.log(arrayDiff([1,2,3], [1,2]))    //, [3], "a was [1,2,3], b was [1,2]")