var validPalindrom = function(s){
    let left = 0
    let right = s.length-1
    
    var checkPalindrome = function(s,l,r){
        while(l<r){
            if(s[l]!==s[r]){
                return false
            }
            l+=1
            r-=1
        }
        return true
    }
    while(left<right){
        if(s[left]!==s[right]){
            let skipL = checkPalindrome(s,left+1,right)
            let skipR = checkPalindrome(s,left,right-1)
            return (skipL || skipR)
        }
        left += 1
        right -= 1
    }
    return true
}