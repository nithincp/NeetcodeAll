## Leetcode Problem - 1011

def shipWithinDays(weights,days):
    l = max(weights)
    r = sum(weights)

    result = r

    def canShip(capacity):
        ship,curCapacity = 1, capacity

        for w in weights:
            if curCapacity-w<0:
                ship+=1
                curCapacity = capacity
            curCapacity -= w

        return ship<=days

    while l<=r:
        capacity = (l + r)//2

        if canShip(capacity):
            result = min(result,capacity)
            r = capacity-1
        else:
            l = capacity + 1

        
    return result




weights = [1,2,3,4,5,6,7,8,9,10]
days = 5

# weights = [1,2,3,4,5]
# days = 2

# weights = [3,2,2,4,1,4]
# days = 3

# weights = [1,2,3,1,1]
# days = 4

print(shipWithinDays(weights,days))