var validPerfectSquare = function(num){
    let l = 1
    let r = num
    
    while(l<=r){
        mid = Math.floor((l+r)/2)
        if(mid*mid>num){
            r=mid-1
        }
        else if(mid*mid<num){
            l=mid+1
        }
        else{
            return true
        }
    }

    return false
}