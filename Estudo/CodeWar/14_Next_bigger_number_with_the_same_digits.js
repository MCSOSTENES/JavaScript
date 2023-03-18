/* 4Kyu
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
*/

function nextBigger(n){
    let dig = n.toString().split('')
    let sort = n.toString().split('').sort((a,b)=> b-a)

    if(n == sort.join('')){
        return -1
    }
    else{
        for(i = dig.length-1 ; i > 0; i--){
            if(dig[i] > dig[i-1]){
                for(j = dig.length-1; j >= i; j--){
                    if(dig[i-1] < dig[j]){
                        let aux = dig[j]
                        dig[j] = dig[i-1]
                        dig[i-1] = aux  
                        if(dig.join('')>n){
                            let num = dig.join('')
                            num = (num.slice(0, i-1) + num[i-1] + (num.slice(i).split('').sort().join('')))
                            return Number(num)
                        } else{continue}  
                    }
                }
                
            }
        }
    }
}


console.log(nextBigger(3853))
//console.log(nextBigger(582))       //,825)
//console.log(nextBigger(513))       //,531)
//console.log(nextBigger(2017))       //,2071)
//console.log(nextBigger(414))       //,441)
//console.log(nextBigger(144))       //,414)