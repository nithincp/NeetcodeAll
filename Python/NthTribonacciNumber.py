## Leetcode Problem - 1137

def tribonacci(n):

    if n == 0:
        return 0
    
    if n == 1:
        return 1
    
    tribonacciSequence = [0]*(n+1)

    tribonacciSequence[1],tribonacciSequence[2] = 1,1

    for i in range(3,n+1):
        tribonacciSequence[i] = tribonacciSequence[i-1] + tribonacciSequence[i-2] + tribonacciSequence[i-3]


    return tribonacciSequence[n]