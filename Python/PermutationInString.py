def checkInclusion(s1,s2):
    if len(s1)>len(s2):
        return False

    s1Count = [0]*26
    s2Count = [0]*26

    for i in range(len(s1)):
        index1 = ord(s1[i]) - ord('a')
        index2 = ord(s2[i]) - ord('a')
        s1Count[index1] +=1
        s2Count[index2] +=1

    matches = 0
    for i in range(26):
        if s1Count[i]==s2Count[i]:
            matches+=1

    left =0
    for right in range(len(s1),len(s2)):
        if matches == 26:
            return True

        index = ord(s2[right])-ord('a')
        s2Count[index]+=1
        if s1Count[index] == s2Count[index]:
            matches+=1
        elif s1Count[index]+1 == s2Count[index]:
            matches-=1

        index = ord(s2[left])-ord('a')
        s2Count[index]-=1
        if s1Count[index] == s2Count[index]:
            matches+=1
        elif s1Count[index]-1 == s2Count[index]:
            matches-=1

        left+=1
    
    return matches == 26

