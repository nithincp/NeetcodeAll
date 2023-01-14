def isIsomorphic(s,t):
    metaMap = {}

    for i in range(len(s)):
        if s[i] in metaMap:
            if metaMap[s[i]] != t[i]:
                return False
        else:
            if t[i] in metaMap.values():
                return False
            metaMap[s[i]] = t[i]

        return True