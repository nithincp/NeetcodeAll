var generateParentheses = function(n){
    let result = []

    var backtrack = function(s='',left=0,right=0){
        if(s.length === 2*n){
            result.push(s)
            return
        }

        if(left<n){
            backtrack(s+'(',left+1,right)
        }

        if(right<left){
            backtrack(s+')',left,right+1)
        }
    }

    backtrack()
    return result
}