## Leetcode Problem - 1930

import collections
import timeit

def countPalindromicSubsequence(s):
    ##Expensive solution - O(2*n) time and space
    
    # subsequences = []
    # countSet = set()

    # def generateSubsequence(string,current,index):
    #     if index == len(string):
    #         subsequences.append(current)
    #         return
        
    #     generateSubsequence(string,current + string[index], index+1)
    #     generateSubsequence(string,current, index+1)

    # generateSubsequence(s,"",0)

    # for sequence in subsequences:
    #     if len(sequence) == 3:
    #         left = 0
    #         right = len(sequence)-1

    #         while left <= right:
    #             if sequence[left] != sequence[right]:
    #                 break
    #             left+=1
    #             right-=1
            
    #         if left >= right:
    #             countSet.add(sequence)

    # return len(countSet)

    ## O(26.n) time and O(n) space complexity

    res = set()
    left = set()
    right = collections.Counter(s)

    for i in range(len(s)):
        right[s[i]] -= 1
        if right[s[i]] == 0:
            right.pop(s[i])

        for j in range(26):
            c = chr(ord('a') + j)
            if c in left and c in right:
                res.add((s[i],c))

        left.add(s[i])

    return len(res)

code ='''
s = "aabca"
print(countPalindromicSubsequence(s))
'''


runtime = timeit.timeit(code, globals=globals(), number=1)

# Print the runtime
print("Runtime:", runtime, "seconds")