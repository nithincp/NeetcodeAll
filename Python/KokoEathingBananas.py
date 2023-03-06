import math

def eatingBananas(piles,h):
    maxPile = max(piles)

    start = 1
    end = maxPile

    result = maxPile

    while start<=end:
        middle = (start+end)//2

        totalHours = 0
        for pile in piles:
            totalHours+=math.ceil(pile/middle)

        if totalHours<=h:
            result=min(result,middle)
            end = middle-1
        else:
            start = middle+1

    return result