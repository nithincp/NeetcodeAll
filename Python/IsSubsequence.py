def isSubsequence(s,t):
    leftS = 0
    leftT = 0

    while leftS<len(s) and leftT<len(t):
        if s[leftS] == t[leftT]:
            leftS+=1
        leftT+=1

    if leftS == len(s):
        return True

    return False