var longestCommonPrefix = function(strs){
    let prefix = ""

    for(let i=0;i<strs[0].length;i++){
        for(const s of strs){
            if(i===s.length){
                return prefix
            }
            if(s[i]!==strs[0][i]){
                return prefix
            }
        }
        prefix += strs[0][i]
    }

    return prefix
}