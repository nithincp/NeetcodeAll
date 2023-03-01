var maxNumberOfBalloons = function(text){
    let hashMap = {}
    for(let char of text){
        if(char in hashMap){
            hashMap[char]+=1
        }
        else{
            hashMap[char]=1
        }
    }

    let word = 'balloon'
    let hashBalloon = {}
    for(let char of word){
        if(char in hashBalloon){
            hashBalloon[char]+=1
        }
        else{
            hashBalloon[char]=1
        }
    }

    let res = text.length
    for(let char of word){
        if(!(char in hashMap)){
            return 0
        }
        res = Math.min(res,Math.floor(hashMap[char]/hashBalloon[char]))
    }

    return res
}