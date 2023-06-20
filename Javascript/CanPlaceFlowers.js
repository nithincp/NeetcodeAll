var canPlaceFlowers = function(flowerbed,n){
    if (n === 0){
        return true
    }

    if (flowerbed.length === 1){
        if (flowerbed[0] === 1){
            if (n===1){
                return false
            }
        }
        else if (flowerbed[0] === 0 ){
            if (n===1){
                return true
            }
        }
    }

    let prev = 0
    let cur = flowerbed[0]
    let i = 1
    let next = flowerbed[i]

    while (i<flowerbed.length){
        next = flowerbed[i]
        if (next === 0 && cur === 0 && prev === 0){
            n-=1
            cur = 1
        }
        if (i === flowerbed.length-1){
            if (next === 0 && cur ===0){
                n-=1
                cur = 1
            }
        }

        prev = cur
        cur = next
        i+=1
    }

    if (n<=0){
        return true
    }else{
        return false
    }
}