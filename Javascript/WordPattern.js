var wordPattern = function(pattern,s){
    let sArray = s.split(" ")
    if(pattern.length !== sArray.length){
        return false
    }
    let hashMap = {}

    for(let i=0;i<pattern.length;i++){
        if(pattern[i] in hashMap){
            if(hashMap[pattern[i]] !== sArray[i]){
                return false
            }
        }
        else{
            const values = Object.values(hashMap)

            for(const v of values){
                if(v === sArray[i]){
                    return false
                }
            }

            hashMap[pattern[i]] = sList[i]
        }
    }

    return true

}