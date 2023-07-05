// Leetcode Problem - 1011

var shipWithinDays = function(weights,days){
    let l = Math.max(...weights)
    let r = weights.reduce((accumulator,curValue) => accumulator + curValue,0)
    let result = r

    function canShip(capacity){
        let ship = 1
        let curCapacity = capacity

        for (const w of weights){
            if (curCapacity-w<0){
                ship+=1
                curCapacity = capacity
            }
            curCapacity -= w
        }
        return (ship<=days ? true:false)
    }

    while (l<=r){
        let capacity = Math.floor((l+r)/2)

        if (canShip(capacity)){
            result = Math.min(result,capacity)
            r = capacity-1
        }else{
            l = capacity + 1
        }
    }

    return result
}

weights = [1,2,3,4,5,6,7,8,9,10]
days = 5

console.log(shipWithinDays(weights,days))