## Leetcode Problem - 1963

def minSwaps(s):
        
    maxSwap = 0
    closingBracketCount = 0

    for i in range(len(s)):
        if s[i] == "]":
            closingBracketCount += 1
            maxSwap = max(maxSwap,closingBracketCount)
        elif s[i] == "[":
            closingBracketCount -= 1

    return (maxSwap + 1)//2

    
s = "][]["
# s = "]]][[["
print(minSwaps(s))