// Leetcode Problem - 1963

var minSwaps = function (s) {
    let closingBracketCount = 0
    let maxSwaps = 0

    for (let i =0;i<s.length;i++){
        if (s[i] === "]"){
            closingBracketCount += 1
            maxSwaps = Math.max(maxSwaps,closingBracketCount)
        }else{
            closingBracketCount -= 1
        }
    }

    return (Math.floor((maxSwaps + 1)/2))

};

s = "][][";
console.log(minSwaps(s));
