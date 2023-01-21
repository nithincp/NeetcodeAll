def longestRepeatingCharacterReplacement(s,k):
    left = 0
    maxf = 0
    res = 0
    count = {}

    for right in range(len(s)):
        count[s[right]] = 1 + count.get(s[right],0)
        maxf = max(maxf,count[s[right]])

        while (right-left+1) - maxf > k:
            count[s[left]] -= 1
            left += 1
        res = max(res,right-left+1)
    
    return res