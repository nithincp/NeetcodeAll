var eatingBananas = function(piles,h){
    let maxPile = Math.max(...piles)

    let start = 1
    let end = maxPile

    let result = maxPile

    while(start<=end){
        let middle = Math.floor((start+end)/2)

        let totalHours = 0
        for(const pile of piles){
            totalHours+=Math.ceil(pile/middle)
        }

        if(totalHours<=h){
            result=Math.min(result,middle)
            end = middle - 1
        }
        else{
            start = middle + 1
        }
    }

    return result
}