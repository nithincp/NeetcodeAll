def findAnagrams(s,p):

    sMap = {}
    pMap = {}
    result = []
    startIndex = 0

    for char in p:
        pMap[char] = 1 + pMap.get(char,0)

    for i in range(len(s)):
        sMap[s[i]] = 1 + sMap.get(s[i],0)

        if i >= len(p)-1:
            if sMap == pMap:
                result.append(startIndex)

            sMap[s[startIndex]] -= 1
            if sMap[s[startIndex]] == 0:
                del sMap[s[startIndex]]

            startIndex+=1

    return result