## Leetcode Problem - 953

def isAlienSorted(words,order):

    hashMap = {char:index for index,char in enumerate(order)}
    print(hashMap)

    for i in range(len(words)-1):
        word1,word2 = words[i],words[i+1]

        for j in range(len(word1)):
            if j == len(word2):
                return False
            
            if word2[j]!=word1[j]:
                if hashMap[word2[j]] < hashMap[word1[j]]:
                    return False
                break

    return True

words = ["word","world","row"]
order = "worldabcefghijkmnpqstuvxyz"
print(isAlienSorted(words,order))