var carFleet = function(target,position,speed){
    let pair = position.map((p,i) => [p,speed[i]])
    let stack = []

    for(let [p,s] of pair.sort((a,b) => (b[0]-a[0]))){
        stack.push((target-p)/s)
        if(stack.length>=2 && stack[stack.length-1]<=stack[stack.length-2]){
            stack.pop()
        }
    }

    return stack.length
}