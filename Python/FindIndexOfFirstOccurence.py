def strStr(haystack,needle):
    lenNeedle = len(needle)
    lenHaystack = len(haystack)

    if lenNeedle>lenHaystack:
        return -1
    
    if needle == haystack:
        return 0
    

    for i in range(lenHaystack-lenNeedle+1):
        substring = haystack[i:i+lenNeedle]
        if substring == needle:
            return i
        
    return -1
