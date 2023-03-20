/* 3Kyu
Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

For Sudoku rules, see the Wikipedia article.

var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

sudoku(puzzle);
/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] 
 */

function sudoku(puzzle) {
    for(let line = 0; line <9; line++){
        for(let column = 0; column <9; column++){
            if(puzzle[line][column] === 0) puzzle[line][column] = check(line,column)          
        }
    }
    return puzzle
}

function check(line,column){
    for(let i = 9; i>=1; i--){
        if (checkHorizontal(line,i) && checkVertical(column, i) && checkSquare(line,column, i)){
            return i
        }
    }
    return `cacahere`
}
function checkHorizontal (line,number){
    if(puzzle[line].indexOf(number)=== -1) return true
    else return false
}

function checkVertical (column,number){
    let arr = []
    for(let i = 0; i<9; i++){
        arr.push(puzzle[i][column])
    }
    if(arr.indexOf(number) === -1) return true
    else return false
}

function checkSquare (line,column,number){
    let arr = []
    let l = 3
    let c = 3
   
    if(line < 3) l = 1
    else if(line < 6) l = 2
    
    if(column < 3) c = 1
    else if(column < 6) c = 2
    
    for(let i = (l-1)*3; i<l*3; i++){
        for(let j = (c-1)*3; j<c*3; j++){
            arr.push(puzzle[i][j])
        }
    }
    if(arr.indexOf(number) === -1) return true
    else return false
}

//Teste***********************

let puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]]

console.log(sudoku(puzzle))

/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] */