var findAnagrams = function(s,p){
    const sMap = new Map()
    const pMap = new Map()
    const result = []
    let startIndex = 0

    function areMapsEqual(map1,map2){
        for (const [key,val] of map1){
            if (val !== map2.get(key)){
                return false
            }
        }

        return true
    }

    for (const char of p){
        pMap.set(char, 1 + (pMap.get(char) || 0))
    }

    for (let i=0;i<s.length;i++){
        sMap.set(s[i], 1 + (sMap.get(s[i]) || 0))

        if (i>=p.length-1){
            if (areMapsEqual(sMap,pMap)){
                result.push(startIndex)
            }

            sMap.set(s[startIndex], sMap.get(s[startIndex])-1)
            if (sMap.get(s[startIndex]) === 0){
                sMap.delete(s[startIndex])
            }
            startIndex+=1
        }
    }

    return result
}