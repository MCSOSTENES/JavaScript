/* 7Kyu
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/
//My first solution
function highAndLow1(numbers){
    let NumbersArray = numbers.split(' ')
    let highNum = Number(NumbersArray[0])
    let lowNum = Number(NumbersArray[0])
    for(i=0; i<NumbersArray.length; i++){
        if(Number(NumbersArray[i]) > highNum) highNum = Number(NumbersArray[i])
        if(Number(NumbersArray[i]) < lowNum) lowNum = Number(NumbersArray[i])
    }
    return `${highNum} ${lowNum}`
}

//My second solution probably slower
function highAndLow2(numbers){
    let highNum = numbers.split(' ').reduce((num, high) => Number(num) > high? high=num: high)
    let lowNum = numbers.split(' ').reduce((num, low) => Number(num) < low? low=num: low)
    return `${highNum} ${lowNum}`
}

//Best pratices
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))      //, "42 -9");
console.log(highAndLow("1 2 3"))      //, "3 1");