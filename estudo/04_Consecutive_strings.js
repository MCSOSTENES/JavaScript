function longestConsec(strarr, k) {
  let size = ""
  for(let i=0; i <= strarr.length - k ; i++){
    let word = ''
    for(j=i; j<i+k; j++){
      word += strarr[j]
    }  
    if (size.length < word.length){
      size = word
    }
  }
  
  return size
}

  //let strarr = ["zone", "abigail", "theta", "form", "libe", "zas"]

  //console.log(longestConsec(strarr,2))

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))
console.log(longestConsec([], 3))
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2))
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2))
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15))
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0))