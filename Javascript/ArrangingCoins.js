var arrangingCoins = function(n){
    let left = 1
    let right = n
    let result = 0

    while(left<=right){
        let mid = Math.floor((left+right)/2)
        let coins = (mid/2)*(mid+1)
        if(coins>n){
            right=mid-1
        }
        else{
            left=mid+1
            result=Math.max(result,mid)
        }
    }

    return result
}