def validPalindrome(s):
    left = 0
    right = len(s)-1

    def checkPalindrome(s,l,r):
        while l<r:
            if s[l] != s[r]:
                return False
            l+=1
            r-=1
        return True

    while left < right:
        if s[left]!=s[right]:
            skipL,skipR = checkPalindrome(s,left+1,right),\
                checkPalindrome(s,left,right-1)
            return skipL or skipR
        left +=1
        right -=1    
    return True