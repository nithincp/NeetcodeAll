#Leetcode Problem - 1768

def mergeStrings(word1,word2):
    lenWord1 = len(word1)
    lenWord2 = len(word2)
    newString = ''

    while lenWord1 and lenWord2:
        newString += word1[len(word1) - lenWord1]
        newString += word2[len(word2) - lenWord2]
        lenWord1 -= 1
        lenWord2 -= 1

    while lenWord1:
        newString += word1[len(word1) - lenWord1]
        lenWord1 -= 1

    while lenWord2:
        newString += word2[len(word2) - lenWord2]
        lenWord2 -= 1


    return newString
