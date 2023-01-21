var longestRepeatingCharReplacement = function(s,k){
    let left = 0
    let res = 0
    let maxf = 0
    let count = {}

    for(let right=0;right<s.length;right++){
        if(s[right] in count){
            count[s[right]] +=1
        }
        else{
            count[s[right]] =1 
        }
        maxf = Math.max(maxf,count[s[right]])

        while((right-left+1) - maxf > k){
            count[s[left]] -=1
            left +=1
        }
        res = Math.max(res,(right-left+1))

    }
    return res
}