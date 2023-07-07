// Leetcode Problem - 131

var partition = function(s){
    const result = []
    const part = []

    function dfs(i){
        if (i>=s.length){
            result.push([...part])
            return
        }

        for (let j=i;j<s.length;j++){
            if (isPalindrome(s,i,j)){
                part.push(s.slice(i,j+1))
                dfs(j+1)
                part.pop()
            }
        }
    }

    dfs(0)

    function isPalindrome(s,l,r){
        while (l<r){
            if (s[l]!==s[r]){
                return false
            }
            l+=1
            r-=1
        }
        return true
    }

    return result
}

s = "aab"
console.log(partition(s))