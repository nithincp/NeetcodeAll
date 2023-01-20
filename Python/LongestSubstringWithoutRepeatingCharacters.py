def lengthOfLongestSubstring(s):
    left,right,max_len = 0,0,0
    window = set()

    while right < len(s):
        if s[right] not in window:
            window.add(s[right])
            right += 1
            max_len = max(max_len,right-left)
        else:
            window.remove(s[left])
            left +=1 
    
    return max_len