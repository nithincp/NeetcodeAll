#Leetcode Problem - 202

def isHappy(n):
    hashSet = set()
    

    while n!=1 and n not in hashSet:
        hashSet.add(n)
        digits = [int(digit) for digit in str(n)]
        sum = 0
        for element in digits:
            sum += element**2

        n = sum

    if n==1:
        return True
    elif n in hashSet:
        return False

n = 2
print(isHappy(n))