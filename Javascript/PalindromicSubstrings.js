// Leetcode Problem - 647

var countSubstrings = function(s){
    let count = 0

    for (let i=0;i<s.length;i++){
        let [l,r] = [i,i]

        while (l>=0 && r<s.length && s[l]===s[r]){
            count+=1
            l-=1
            r+=1
        }

        l = i
        r = i+1

        while (l>=0 && r<s.length && s[l] === s[r]){
            count+=1
            l-=1
            r+=1
        }
    }

    return count
}

s = "abc"
console.log(countSubstrings(s))