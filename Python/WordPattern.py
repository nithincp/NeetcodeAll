def wordPattern(pattern,s):
    hashMap = {}
    sList = s.split(" ")

    if len(pattern) != len(sList):
        return False

    for i in range(len(pattern)):
        if pattern[i] not in hashMap:
            if sList[i] in hashMap.values():
                return False
            
            hashMap[pattern[i]] = sList[i]

        else:
            if hashMap[pattern[i]] != sList[i]:
                return False
    
    return True