def climbingStairs(n):

    value1 = 1
    value2 = 1
    i = 0

    while i < n-1:
        temp = value2
        value2 = value2 + value1
        value1 = temp
        i+=1
        

    return value2