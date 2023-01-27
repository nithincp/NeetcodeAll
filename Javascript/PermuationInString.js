var checkInclusion = function(s1,s2){
    if(s1.length>s2.length){
        return false
    }

    let s1Count = new Array(26).fill(0)
    let s2Count = new Array(26).fill(0)

    for(let i=0;i<s1.length;i++){
        let index1 = s1[i].charCodeAt(0)-'a'.charCodeAt(0)
        let index2 = s2[i].charCodeAt(0)-'a'.charCodeAt(0)
        s1Count[index1] +=1
        s2Count[index2] +=1
    }

    let matches = 0
    for(let i =0;i<26;i++){
        if(s1Count[i]===s2Count[i]){
            matches+=1
        }
    }

    let left =0
    for(let right=s1.length;right<s2.length;right++){
        if(matches===26){
            return true
        }

        let index = s[right].charCodeAt(0)-'a'.charCodeAt(0)
        s2Count[index]+=1
        if(s1Count[index] === s2Count[index]){
            matches+=1
        }
        else if(s1Count[index]+1===s2Count[index]){
            matches-=1
        }

        index = s[left].charCodeAt(0)-'a'.charCodeAt(0)
        s2Count[index]-=1
        if(s1Count[index] === s2Count[index]){
            matches+=1
        }
        else if(s1Count[index]-1===s2Count[index]){
            matches-=1
        }

        left+=1

    }
    return matches===26
}