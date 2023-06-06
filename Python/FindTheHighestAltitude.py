## Leetcode Problem - 1732

def largestAltitude(gain):
    maxAltitude = 0
    height = 0

    for element in gain:
        height += element
        maxAltitude = max(maxAltitude,height)

    return maxAltitude


gain = [-5,1,5,0,-7]
print(largestAltitude(gain))