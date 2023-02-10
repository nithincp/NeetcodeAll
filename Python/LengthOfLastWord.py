def lengthOfLastWord(s):
    i=len(s)-1

    while s[i]==" ":
        i -=1

    while i>=0 and s[i]!=" ":
        lengthWord +=1
        i -=1

    return lengthWord