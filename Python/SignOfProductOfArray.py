## Leetcode Problem - 1822

def arraySign(nums):
    product = 1
    for elemet in nums:
        product *= elemet

    if product>0:
        return 1
    elif product == 0:
        return 0
    else:
        return -1
