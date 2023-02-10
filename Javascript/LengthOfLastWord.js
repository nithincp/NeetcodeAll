var lengthOfLastWord = function(s){
    let i = s.length-1

    while(s[i]===" "){
        i--
    }
    
    let lengthWord = 0

    while(i>=0 && s[i]!==" "){
        lengthWord +=1
        i--
    }

    return lengthWord
}