var isIsomorphic = function(s,t){
    let metaMap = new Map()

    for(let i =0;i<s.length;i++){
        if(metaMap.has(s[i])){
            if(metaMap.get(s[i]) != t[i]){
                return false
            }
        }
        else{
            for(let [key,value] of metaMap){
                if(value === t[i]){
                    return false
                }
            }
            metaMap.set(s[i],t[i])
        }
    }
    return true
}