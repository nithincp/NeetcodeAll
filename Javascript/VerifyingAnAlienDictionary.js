// Leetcode Problem - 953

var isAlienSorted = function(words,order){
    let orderArray = order.split("");
    let hashMap = new Map()
    orderArray.forEach((element,index) => {
        hashMap.set(element,index)
    });

    for (let i=0;i<words.length-1;i++){
        const [word1,word2] = [words[i],words[i+1]]

        for (let j=0;j<word1.length;j++){
            if (j === word2.length){
                return false
            }

            if (word1[j]!==word2[j]){
                if (hashMap.get(word2[j])<hashMap.get(word1[j])){
                    return false
                }
                break
            }
        }
    }

    return true
}

words = ["word","world","row"]
order = "worldabcefghijkmnpqstuvxyz"
console.log(isAlienSorted(words,order))