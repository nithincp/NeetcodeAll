def canPlaceFlowers(flowerbed,n):
    if n == 0:
        return True
    
    if len(flowerbed) == 1:
        if flowerbed[0] == 1:
            return False
        elif flowerbed[0] == 0:
            if n == 1:
                return True
            else:
                return False
        
    prev = 0
    cur = flowerbed[0] 
    i = 1

    while i<len(flowerbed):
        next = flowerbed[i]
        if next == 0 and prev == 0 and cur == 0:
            n-=1
            cur = 1
        if i == len(flowerbed)-1:
            if next ==0 and cur ==0:
                n-=1
                cur = 1
        prev = cur
        cur = next
        i+=1

    if n<=0:
        return True
    else:
        return False



flowerbed = [1,0,0,0,1]
n = 2

print(canPlaceFlowers(flowerbed,n))