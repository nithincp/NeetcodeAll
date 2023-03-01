def maxNumberOfBalloons(text):
    hashMap={}
    for char in text:
        if char in hashMap:
            hashMap[char]+=1
        else:
            hashMap[char]=1

    word = 'balloon'
    hashBalloon = {}
    for char in word:
        if char in hashBalloon:
            hashBalloon[char]+=1
        else:
            hashBalloon[char]=1
    
    res = len(text)
    for char in word:
        if char not in hashMap:
            return 0
        res = min(res,hashMap[char]//hashBalloon[char])

    return res