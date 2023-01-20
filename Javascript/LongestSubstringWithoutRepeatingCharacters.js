var lengthOfLongestSubstring = function(s){
    let left = 0
    let right = 0
    let max_len = 0
    let window = new Set()

    while(right<s.length){
        if(!(window.has(s[right]))){
            window.add(s[right])
            right += 1
            max_len = Math.max(max_len,right-left)
        }
        else{
            window.delete(s[left])
            left += 1
        }
    }

    return max_len
}