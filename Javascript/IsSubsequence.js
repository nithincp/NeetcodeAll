var isSubsequence = function(s,t){
    let leftS = 0
    let leftT = 0

    while(leftS<s.length && leftT<t.length){
        if(s[leftS] === t[leftT]){
            leftS += 1
        }
        leftT += 1
    }

    if(leftS === s.length){
        return true
    }

    return false
}